import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {ICoord} from '../../interfaces/ICoord';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  host: {'class': 'frame'},
})
export class FrameComponent implements OnInit {
  @Input()
  private forbidden: ICoord;

  @Input()
  private coordinate: ICoord;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const el: any = this.element.nativeElement;
    el.style.left = `${this.coordinate.x * (el.offsetWidth - 2)}px`;
  }

  /**
   * Checks if the frame is the forbidden one
   *
   * @returns {boolean}
   */
  @HostBinding('class.frame-forbidden')
  public get isForbidden(): boolean {
    console.log(this.forbidden, this.coordinate)
    return undefined !== this.forbidden &&
      this.forbidden.x === this.coordinate.x &&
      this.forbidden.y === this.coordinate.y;
  }

}
