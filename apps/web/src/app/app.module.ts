import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatModule } from 'pkgs/mat';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
