import { Injectable } from '@angular/core';
import {Piece} from '../models/Piece';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PiecesService {
  public pieces: Piece[] = [];
  private used: Piece[] = [];
  public usedPieces: BehaviorSubject<Piece[]> = new BehaviorSubject([]);
  private currentPieceIndex: number = 0;
  public currentPiece: ReplaySubject<Piece> = new ReplaySubject();
  public solved: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.initPieces();
    this.selectPiece(this.currentPieceIndex);
  }

  /**
   * Select a specific piece as current piece
   *
   * @param {number} number
   */
  private selectPiece(number: number): void {
    this.currentPieceIndex = number;
    this.currentPiece.next(this.pieces[number]);
  }

  /**
   * Selects next piece as current piece
   */
  public selectNextPiece(): void {
    this.selectPiece((this.currentPieceIndex + 1) % this.pieces.length);
  }

  /**
   * Selects previous piece as current piece
   */
  public selectPreviousPiece(): void {
    const newIndex: number = this.currentPieceIndex - 1;
    this.selectPiece(newIndex >= 0 ? newIndex : this.pieces.length - 1);
  }

  /**
   * Saves current piece as used piece
   */
  public save(): void {
    const currentPiece: Piece = this.pieces[this.currentPieceIndex];
    let used: Piece[];
    if (this.usedPieces.getValue().includes(currentPiece)) {
      used = this.usedPieces.getValue()
        .filter((piece: Piece) => currentPiece !== piece);
    } else {
      used = Array.from(new Set([
        ...this.usedPieces.getValue(),
        this.pieces[this.currentPieceIndex],
      ]));
    }

    this.usedPieces.next(used);
    if (used.length === this.pieces.length) { // puzzle is solved
      this.solved.next(true);
    }
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
