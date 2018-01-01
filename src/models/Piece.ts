import {ICoord} from '../interfaces/ICoord';

export class Piece {
  private coordinates: ICoord = {x: 0, y: 0};

  constructor(public matrix: number[][]) {}

  /**
   * Moves the piece to new coordinates
   * @param {ICoord} coordinates
   */
  public moveTo(coordinates: ICoord): void {
    this.coordinates = coordinates;
  }

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
}
