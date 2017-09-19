import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiRatingModule, SuiSidebarModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuiRatingModule,
    SuiSidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
