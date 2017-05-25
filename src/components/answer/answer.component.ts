import { Component, Input } from '@angular/core';
import { Chooser } from "../../randomizer/chooser";

declare var $: any;

@Component({
  selector: 'rm-answer',
  templateUrl: 'answer.html'
})
export class AnswerComponent {
  choice: string;

  @Input()
  set chosenValue(chosenValue: string) {
    const newChoice = chosenValue || '';
    $('#answer-elem')
      .velocity({ opacity: 0, scale: 0 }, {
        complete: () => {
          this.choice = newChoice
        },
        easing: [0.6, -0.28, 0.735, 0.045],
        duration: 300,
      })
      .velocity({ opacity: 1, scale: 1 }, {
        easing: [0.04, 0.48, 0.06, 1.53],
        duration: 300,
      });
  }
}