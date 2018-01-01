import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Frame} from '../../models/Frame';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  host: {'class': 'row'},
})
export class RowComponent implements OnInit {
  @Input()
  private frames: Frame[] = [];

  @Input()
  private rowNumber: number = 0;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const el: any = this.element.nativeElement;
    el.style.top = `${this.rowNumber * (el.offsetHeight - 2)}px`;
  }

}
