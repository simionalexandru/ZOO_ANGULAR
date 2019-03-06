import { Component, OnInit } from '@angular/core';

import {Animals} from './interface/animals.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ZOO';

  animalsArray:Animals[] = [
    {
      id : 1,
      name: 'Giorgio', 
      done: false,
      type: 'dog', 
      breed: 'amstaff',
      talk: 'wouf'
    },
    {
      id : 2,
      name: 'Felini', 
      done: false,
      type: 'cat', 
      breed: 'persian',
      talk: 'miau'
    },
    {
      id : 4,
      name: 'Toto', 
      done: false,
      type: 'cat', 
      breed: 'sphinx',
      talk: 'miau'
    },
    {
      id : 3,
      name: 'Ka', 
      done: false,
      type: 'snake', 
      breed: 'python',
      talk: 'sssssss'
    }
  ]

  ngOnInit() {
    console.log('APP COMPONENT-------------------------> ON INIT');
  }

  onCheckFromAnimals(checked:Animals){
    console.log('----------------> checked',  checked);
    let index = this.animalsArray.findIndex(elem =>elem.id == checked.id);

    if(index !== -1){
      this.animalsArray[index].done = true;
      window.alert(this.animalsArray[index].talk); 
    }
  }
}
