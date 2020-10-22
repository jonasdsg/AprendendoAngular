import { LoianeModule } from './aulas/loiane/loiane.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoianeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
