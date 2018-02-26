import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  public counter: number = 0;

  public interval: any = null;

  // Store current state of Counter (Start/Stop/Reset)
  public counterState: string = '';

  // Returns different counter states
  public counterStates = {
    START: 'START',
    PAUSE: 'PAUSE',
    RESET: 'RESET'
  };

  constructor() { }

  ngOnInit() {
  }


  /**
   * @desc Start the counter
   */
  startTimer() {

    try {

      this.counterState = this.counterStates.START;

      this.interval = setInterval(() => {
        this.counter++;
      }, 1000);

    } catch (err) {
      throw err;
    }

  }


  /**
   * @desc  Stop the timer by clearing the current interval
   */
  stopTimer() {

    try {

      this.counterState = this.counterStates.PAUSE;

      clearInterval(this.interval);

    } catch(err) {
      throw err;
    }

  }


  /**
   * @desc Stop timer and reset counter to zero
   */
  resetTimer() {

    try {

      this.stopTimer();

      this.counterState = this.counterStates.RESET;

      this.counter = 0;

    } catch (err) {
      throw err;
    }

  }

}
