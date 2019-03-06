import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animals } from '../interface/animals.interface';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  @Input() snakeInput:Animals;
  @Output() onPlaySoundEvent:EventEmitter<Animals> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onPlaySound(){
    console.log('-----------> onPlaySound');
    this.onPlaySoundEvent.emit(this.snakeInput);
  }

}
