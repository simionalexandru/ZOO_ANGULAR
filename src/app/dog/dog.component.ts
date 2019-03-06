import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animals } from '../interface/animals.interface';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  @Input() dogInput:Animals;
  @Output() onPlaySoundEvent:EventEmitter<Animals> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onPlaySound(){
    console.log('-----------> onPlaySound');
    this.onPlaySoundEvent.emit(this.dogInput);
  }

}
