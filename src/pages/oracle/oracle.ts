import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Oracle } from "../../randomizer/oracle";
import { Choice } from "../../randomizer/models/choice";

@Component({
  selector: 'page-oracle',
  templateUrl: 'oracle.html',
  providers: [Oracle]
})
export class OraclePage {
  choice: Choice<string>;
  oracle: Oracle;

  constructor(public navCtrl: NavController, oracle: Oracle) {
    this.oracle = oracle;
    this.choice = oracle.choose();
  }

  choose($event, el) {
    const newChoice = this.oracle.choose();
    $(el)
      .velocity({ opacity: 0, scale: 0 }, {
        complete: () => {
          console.log('asd')
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
