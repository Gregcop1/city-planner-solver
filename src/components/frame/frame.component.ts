import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {Frame} from '../../models/Frame';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  host: {'class': 'frame'},
})
export class FrameComponent implements OnInit {
  @Input()
  private frame: Frame;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const el: any = this.element.nativeElement;
    el.style.left = `${this.frame.x * (el.offsetWidth - 2)}px`;
  }

  /**
   * Checks if the frame is the forbidden one
   *
   * @returns {boolean}
   */
  @HostBinding('class.frame-forbidden')
  public get isForbidden(): boolean {
    return this.frame.forbidden;
  }

}
