import { Injectable } from '@angular/core';
import {Piece} from '../models/Piece';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class PiecesService {
  public pieces: Piece[] = [];
  public currentPiece: ReplaySubject<Piece> = new ReplaySubject();

  constructor() {
    this.initPieces();
    this.selectPiece(0);
  }

  private selectPiece(number: number) {
    this.currentPiece.next(this.pieces[number]);
  }

  /**
   * Inits all pieces of the game
   */
  private initPieces() {
    /**
     *  ■■■■■
     */
    this.pieces.push(new Piece(
      [[1, 1, 1, 1, 1]],
    ));

    /**
     * ■X
     */
    this.pieces.push(new Piece(
      [[2, 2]],
    ));

    /**
     * ■
     * ■■
     *  ■■
     */
    this.pieces.push(new Piece(
      [
        [3, 0, 0],
        [3, 3, 0],
        [0, 3, 3],
      ],
    ));

    /**
     * ■■■■
     *   ■
     */
    this.pieces.push(new Piece(
      [
        [4, 4, 4, 4],
        [0, 0, 4, 0],
      ],
    ));

    /**
     * ■■■
     * ■■■
     *  ■
     */
    this.pieces.push(new Piece(
      [
        [5, 5, 5],
        [5, 5, 5],
        [0, 5, 0],
      ],
    ));

    /**
     * ■■■
     *  ■■■
     *  ■■
     */
    this.pieces.push(new Piece(
      [
        [6, 6, 6, 0],
        [0, 6, 6, 6],
        [0, 6, 6, 0],
      ],
    ));

    /**
     * ■■■
     *  ■
     */
    this.pieces.push(new Piece(
      [
        [7, 7, 7],
        [0, 7, 0],
      ],
    ));

    /**
     * ■■■■
     *  ■■
     */
    this.pieces.push(new Piece(
      [
        [8, 8, 8, 8],
        [0, 8, 8, 0],
      ],
    ));

    /**
     * ■■■■
     * ■■
     * ■
     */
    this.pieces.push(new Piece(
      [
        [9, 9, 9],
        [9, 9, 0],
        [9, 0, 0],
      ],
    ));
  }
}
