import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewFeatureComponent } from './new-feature/new-feature.component';
import { RedFeatureComponent } from './red-feature/red-feature.component';
import { EmojiComponent } from './emoji/emoji.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFeatureComponent,
    RedFeatureComponent,
    EmojiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
