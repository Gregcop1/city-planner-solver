import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from '../components/board/board.component';
import { ControlsComponent } from '../components/controls/controls.component';
import { FrameComponent } from '../components/frame/frame.component';
import { PieceListComponent } from '../components/piece-list/piece-list.component';
import { RowComponent } from '../components/row/row.component';
import { RulesComponent } from '../components/rules/rules.component';
import { BoardService } from '../services/board.service';
import { PiecesService } from '../services/pieces.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FrameComponent,
    RowComponent,
    PieceListComponent,
    ControlsComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BoardService,
    PiecesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
