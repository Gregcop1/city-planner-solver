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
    return matrix.length &&
      matrix[0].length &&
      coord.x >= 0 &&
      coord.x + matrix[0].length <= BoardService.maxX &&
      coord.y >= 0 &&
      coord.y + matrix.length <= BoardService.maxY;
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

  /**
   * Rotates the matrix from 90 deg clockwise
   */
  public rotate(): void {
    const grid = this.rotateMatrix(this.matrix);
    if (this.isInBoundaries(this.coordinates, grid)) {
      this.matrix = grid;
      this.changes.emit();
    }
  }

  /**
   * Rotates a matrix
   * @param {number[][]} matrix
   * @returns {number[][]}
   */
  private rotateMatrix (matrix: number[][]) {
    if (undefined === matrix || undefined === matrix[0]) {
      return [];
    }

    const newMatrix: number[][] = [];
    const maxY: number = matrix.length - 1;

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        const newX: number = maxY - y;
        if (undefined === newMatrix[x]) {
          newMatrix[x] = [];
        }

        newMatrix[x][newX] = matrix[y][x];
      }
    }

    return newMatrix;
  }
}
