import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AddCollectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
