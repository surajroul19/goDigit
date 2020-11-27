import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataViewComponent } from './data-view/data-view.component';
import { HelperService } from './helper.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
