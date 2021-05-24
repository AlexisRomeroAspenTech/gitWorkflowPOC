import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewFeatureComponent } from './new-feature/new-feature.component';
import { RedFeatureComponent } from './red-feature/red-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFeatureComponent,
    RedFeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
