import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { AuInputModule } from './lib/au-input.module';
import { AuMdInputComponent } from './lib/au-md-input/au-md-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AuMdInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
