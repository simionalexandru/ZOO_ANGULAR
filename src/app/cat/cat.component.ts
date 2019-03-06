import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Animals} from '../interface/animals.interface';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Input() catInput:Animals;
  @Output() onPlaySoundEvent:EventEmitter<Animals> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onPlaySound(){
    console.log('-----------> onPlaySound');
    this.onPlaySoundEvent.emit(this.catInput);
  }

}
