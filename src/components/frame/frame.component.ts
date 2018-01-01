import {Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Frame} from '../../models/Frame';
import {PiecesService} from '../../services/pieces.service';
import {Subscription} from 'rxjs/Subscription';
import {Piece} from '../../models/Piece';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  host: {'class': 'frame'},
})
export class FrameComponent implements OnInit, OnChanges {
  @Input()
  private frame: Frame;

  private numberOfPieces: number = 0;

  constructor(private element: ElementRef, private piecesService: PiecesService) { }

  ngOnInit() {
    const el: any = this.element.nativeElement;
    el.style.left = `${this.frame.x * (el.offsetWidth - 2)}px`;

    this.numberOfPieces = this.piecesService.pieces.length;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (undefined !== changes.frame) {
      this.removeValueClasses();
      this.addValueClass();
    }
  }

  /**
   * Adds a class to host depending on current value
   */
  private addValueClass(): void {
    this.element.nativeElement.classList.add(`frame-${this.frame.value}`);
  }

  /**
   * Removes all value classes
   */
  private removeValueClasses(): void {
    const el: any = this.element.nativeElement;
    for (let i: number = 0; i < this.numberOfPieces; i++) {
      el.classList.remove(`frame-${i}`);
    }
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
