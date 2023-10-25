import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatereferencevariableComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
