import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from '../components/board/board.component';
import { FrameComponent } from '../components/frame/frame.component';
import { RowComponent } from '../components/row/row.component';
import { BoardService } from '../services/board.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FrameComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
