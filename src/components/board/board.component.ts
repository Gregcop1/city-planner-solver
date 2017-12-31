import {Component, Input, OnInit} from '@angular/core';
import {ICoord} from '../../interfaces/ICoord';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input()
  private forbidden: ICoord;

  private readonly maxX: number = 7;
  private rows: any[];

  constructor() {
    this.rows = new Array(this.maxX);
  }

  ngOnInit() {
  }

}
