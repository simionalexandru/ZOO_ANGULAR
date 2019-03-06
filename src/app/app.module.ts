import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    CatComponent,
    DogComponent,
    SnakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
