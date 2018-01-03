import { Component, OnInit } from '@angular/core';
import {Piece} from '../../models/Piece';
import {PiecesService} from '../../services/pieces.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-piece-list',
  templateUrl: './piece-list.component.html',
  styleUrls: ['./piece-list.component.scss']
})
export class PieceListComponent implements OnInit {
  public pieces: Piece[] = [];
  public usedPieces: Piece[] = [];
  private currentPiece: Piece;

  constructor(private piecesService: PiecesService) { }

  ngOnInit() {
    this.pieces = this.piecesService.pieces;
    this.piecesService.usedPieces
      .subscribe((list: any) => this.usedPieces = list);

    this.piecesService.currentPiece.subscribe((piece: Piece) => this.currentPiece = piece);
  }

  /**
   * Checks if a piece is the active piece
   *
   * @param {Piece} piece
   * @returns {boolean}
   */
  public isActive(piece: Piece) {
    return this.currentPiece === piece;
  }

  /**
   * Checks if a piece is already used
   *
   * @param {Piece} piece
   * @returns {any}
   */
  public isUsed(piece: Piece) {
    return this.usedPieces.includes(piece);
  }

}
