import {Component, Input, OnInit} from '@angular/core';
import {ICoord} from '../../interfaces/ICoord';
import {BoardService} from '../../services/board.service';
import {PiecesService} from '../../services/pieces.service';
import 'rxjs/add/operator/combineLatest';
import {Frame} from '../../models/Frame';
import {Piece} from '../../models/Piece';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input()
  private forbidden: ICoord;

  private frames: Frame[][] = [];
  private originalFrames: Frame[][] = [];
  private currentPiece: Piece;

  constructor(private boardService: BoardService, private piecesService: PiecesService) {}

  ngOnInit() {
    // save original boar
    const boardSubscription = this.boardService.frames
      .subscribe((frames: Frame[][]) => {
        this.originalFrames = frames;
        boardSubscription.unsubscribe();
      });

    // listen for board and current pieces changes
    this.boardService.frames
      .combineLatest(this.piecesService.currentPiece)
      .subscribe(this.mergeWithCurrentPiece.bind(this));

    // listen for current piece changes
    this.piecesService.currentPiece
      .subscribe((piece: Piece) => {
        this.currentPiece = piece;
        this.currentPiece.changes.subscribe(() => {
          this.mergeWithCurrentPiece([this.originalFrames, this.currentPiece]);
        });
      });

    // init all frames
    this.boardService.initFrames(this.forbidden);

    // listen for keyboard event
    document.body.addEventListener('keydown', this.bindKeyboard.bind(this));
  }

  bindKeyboard(e: KeyboardEvent) {
    if (this.currentPiece) {
      switch(e.keyCode) {
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
        case 82: // r
          this.currentPiece.rotate();
          break;
      }
    }
  }

  /**
   * Merge frames with current pieces
   * @param {any} frames
   * @param {any} current
   */
  private mergeWithCurrentPiece([frames, current]) {
    if (frames && current) {
      this.frames = frames.map((row: Frame[]) => {
        return row.map((frame: Frame) => {
          let value: number;
          if (null !== (value = current.getValue({x: frame.x, y: frame.y}))) {
            return {...frame, value};
          }

          return frame;
        });
      });
    }
  }
}
