import {ICoord} from '../interfaces/ICoord';
import {EventEmitter} from '@angular/core';
import {BoardService} from '../services/board.service';

export class Piece {
  private coordinates: ICoord = {x: 0, y: 0};
  public changes: EventEmitter<any> = new EventEmitter();

  constructor(public matrix: number[][]) {}

  /**
   * Gets value for a specific coordinate
   * @param {ICoord} coord
   * @returns {number}
   */
  public getValue(coord: ICoord): number {
    if (undefined === this.matrix || !this.matrix.length || !this.isInMatrix(coord)) {
      return null;
    }

    const posX = coord.x - this.coordinates.x;
    const posY = coord.y - this.coordinates.y;

    return this.matrix[posY] ? this.matrix[posY][posX] : null;
  }

  /**
   * Checks if a coordinate is in matrix for current position
   * @param {ICoord} coord
   * @returns {boolean}
   */
  private isInMatrix(coord: ICoord): boolean {
    const first: number[] = this.matrix[0];
    const minX: number = this.coordinates.x;
    const maxX: number = minX + first.length;
    const minY: number = this.coordinates.y;
    const maxY: number = minY + this.matrix.length;

    return coord.x >= minX && coord.x < maxX && coord.y >= minY && coord.y < maxY;
  }

  /**
   * Checks if new coordinates and matrix are in board boundaries
   * @param {ICoord} coord
   * @param {number[][]} matrix
   * @returns {boolean}
   */
  private isInBoundaries(coord: ICoord, matrix: number[][]): boolean {
    return this.matrix.length &&
      this.matrix[0].length &&
      coord.x >= 0 &&
      coord.x + this.matrix[0].length <= BoardService.maxX &&
      coord.y >= 0 &&
      coord.y + this.matrix.length <= BoardService.maxY;
  }

  /**
   * Moves the piece to right position
   */
  public moveToRight(): void {
    this.moveTo({
      x: this.coordinates.x + 1,
      y: this.coordinates.y,
    });
  }

  /**
   * Moves the piece to left position
   */
  public moveToLeft(): void {
    this.moveTo({
      x: this.coordinates.x - 1,
      y: this.coordinates.y,
    });
  }

  /**
   * Moves the piece to top position
   */
  public moveToTop(): void {
    this.moveTo({
      x: this.coordinates.x,
      y: this.coordinates.y - 1,
    });
  }

  /**
   * Moves the piece to bottom position
   */
  public moveToBottom(): void {
    this.moveTo({
      x: this.coordinates.x,
      y: this.coordinates.y + 1,
    });
  }

  /**
   * Moves to specific coordinates if they respect boundaries
   * @param {ICoord} coord
   */
  private moveTo(coord: ICoord): void {
    if (this.isInBoundaries(coord, this.matrix)) {
      this.coordinates = coord;
      this.changes.emit();
    }
  }
}
