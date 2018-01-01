import {Component, Input, OnInit} from '@angular/core';
import {ICoord} from '../../interfaces/ICoord';
import {BoardService} from '../../services/board.service';
import {PiecesService} from '../../services/pieces.service';
import 'rxjs/add/operator/combineLatest';
import {Frame} from '../../models/Frame';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input()
  private forbidden: ICoord;

  private frames: any[] = [];

  constructor(private boardService: BoardService, private piecesService: PiecesService) {}

  ngOnInit() {
    this.boardService.frames
      .combineLatest(this.piecesService.currentPiece)
      .subscribe(this.mergeWithCurrentPiece.bind(this));

    this.boardService.initFrames(this.forbidden);
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
