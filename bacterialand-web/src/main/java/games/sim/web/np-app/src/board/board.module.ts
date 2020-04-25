import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board.component';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BoardComponent]
})
export class BoardModule { }
