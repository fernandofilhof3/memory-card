import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DispositionCardsPipe } from './pipes/disposition-cards.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainScreenComponent,
    DispositionCardsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
