import { Injectable } from '@angular/core';
import {ICoord} from '../interfaces/ICoord';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Frame} from '../models/Frame';

@Injectable()
export class BoardService {
  private readonly maxX: number = 7;
  private readonly maxY: number = 7;
  public frames: ReplaySubject<any[]> = new ReplaySubject();

  /**
   * Inits frame's list
   * @param {ICoord} forbiddenFrame
   */
  initFrames(forbiddenFrame: ICoord) {
    const list: any[] = [];

    for (let y = 0; y < this.maxY; y++) {
      const row: Frame[] = [];

      for (let x = 0; x < this.maxX; x++) {
        row.push(new Frame(x, y, (forbiddenFrame.x === x && forbiddenFrame.y === y)));
      }

      list.push(row);
    }

    this.frames.next(list);
  }

}
