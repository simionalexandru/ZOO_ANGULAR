import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Animals} from '../interface/animals.interface';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {


  @Input() animalsInput:Animals;
  @Output() onPlaySoundEvent:EventEmitter<Animals> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('AnimalsComponent-------------------------> ON INIT');
  }

  onPlaySound(){
    console.log('-----------> onPlaySound');
    this.onPlaySoundEvent.emit(this.animalsInput);
  }

}
