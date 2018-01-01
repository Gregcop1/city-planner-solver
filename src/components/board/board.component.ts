import {Component, Input, OnInit} from '@angular/core';
import {ICoord} from '../../interfaces/ICoord';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input()
  private forbidden: ICoord;

  private frames: any[] = [];

  constructor(private boardService: BoardService) {}

  ngOnInit() {
    this.boardService.frames.subscribe((frames: any[]) => { this.frames = frames; });
    this.boardService.initFrames(this.forbidden);
  }

}
