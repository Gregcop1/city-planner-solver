import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ICoord} from '../../interfaces/ICoord';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  host: {'class': 'row'},
})
export class RowComponent implements OnInit {
  @Input()
  private forbidden: ICoord;

  @Input()
  private rowNumber: number = 0;

  private readonly maxY: number = 7;
  private columns: any[];

  constructor(private element: ElementRef) {
    this.columns = new Array(this.maxY);
  }

  ngOnInit() {
    const el: any = this.element.nativeElement;
    el.style.top = `${this.rowNumber * (el.offsetHeight - 2)}px`;
  }

}
