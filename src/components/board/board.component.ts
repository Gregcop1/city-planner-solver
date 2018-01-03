import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ICoord} from '../../interfaces/ICoord';
import {BoardService} from '../../services/board.service';
import {PiecesService} from '../../services/pieces.service';
import {Frame} from '../../models/Frame';
import {Piece} from '../../models/Piece';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input()
  private forbidden: ICoord;

  @HostBinding('class.solved')
  private solved: boolean = false;

  private readonly UNUSABLE_FRAME: number = -2;

  private frames: Frame[][] = [];
  private originalFrames: Frame[][] = [];
  private usedPieces: Piece[] = [];
  private currentPiece: Piece;

  constructor(private boardService: BoardService, private piecesService: PiecesService) {}

  ngOnInit() {
    // listen for puzzle success
    this.piecesService.solved
      .subscribe((solved: boolean) => this.solved = solved);

    // save original boar
    const boardSubscription = this.boardService.frames
      .subscribe((frames: Frame[][]) => {
        this.originalFrames = frames;
        boardSubscription.unsubscribe();
      });

    // listen for board and current pieces changes
    this.piecesService.currentPiece
      .combineLatest(this.piecesService.usedPieces)
      .combineLatest(this.boardService.frames)
      .debounceTime(10)
      .subscribe(this.mergeWithCurrentPiece.bind(this));

    // listen for used pieces changes
    this.piecesService.usedPieces
      .subscribe((pieces: Piece[]) => this.usedPieces = pieces);

    // listen for current piece changes
    this.piecesService.currentPiece
      .subscribe((piece: Piece) => {
        this.currentPiece = piece;
        this.currentPiece.changes.subscribe(() => {
          this.mergeWithCurrentPiece([[this.currentPiece, this.usedPieces], this.originalFrames]);
        });
      });

    // init all frames
    this.boardService.initFrames(this.forbidden);

    // listen for keyboard event
    document.body.addEventListener('keydown', this.bindKeyboard.bind(this));
  }

  /**
   * Binds keyboard events
   * @param {KeyboardEvent} e
   */
  bindKeyboard(e: KeyboardEvent) {
    if (!this.solved && this.currentPiece) {
      switch (e.keyCode) {
        case 37: // left
          this.currentPiece.moveToLeft();
          break;
        case 38: // top
          this.currentPiece.moveToTop();
          break;
        case 39: // right
          this.currentPiece.moveToRight();
          break;
        case 40: // down
          this.currentPiece.moveToBottom();
          break;
        case 78: // n
          this.piecesService.selectNextPiece();
          break;
        case 82: // r
          this.currentPiece.rotate();
          break;
        case 32: // space
          if (this.isSavable()) {
            this.piecesService.save();
          }
          break;
      }
    }
  }

  /**
   * Merge frames with current pieces
   * @param {any} frames
   * @param {any} current
   */
  private mergeWithCurrentPiece([allPieces, frames]) {
    const [current, used] = allPieces;

    if (frames && current) {
      // combine used and current piece in a deduped array
      const allUsedPieces: Piece[] = Array.from(new Set([...used, current]));

      this.frames = frames.map((row: Frame[]) => {
        return row.map((frame: Frame) => {
          const value: number = this.getValueAtCoord(allUsedPieces, {x: frame.x, y: frame.y});

          return {
            ...frame,
            value: (0 !== value && frame.forbidden) ? this.UNUSABLE_FRAME : value,
          };
        });
      });
    }
  }

  /**
   * Gets value at specific coordinates
   * @param {Piece[]} pieces
   * @param {ICoord} coord
   * @returns {number}
   */
  getValueAtCoord(pieces: Piece[], coord: ICoord): number {
    let value: number = 0;

    pieces.forEach((piece: Piece) => {
      const pieceValue: number = piece.getValue(coord);

      if (null !== pieceValue && 0 !== pieceValue) {
        if (0 !== value && 0 !== pieceValue) {
          value = this.UNUSABLE_FRAME;
        } else {
          value = pieceValue;
        }
      }
    });

    return value;
  }

  /**
   * Checks if a frame contains conflicts
   * @returns {boolean}
   */
  isSavable(): boolean {
    return !this.frames.reduce((prev, current) => [...prev, ...current], [])
      .map((item: Frame) => item.value)
      .filter((value: number) => this.UNUSABLE_FRAME === value)
      .length;
  }
}
