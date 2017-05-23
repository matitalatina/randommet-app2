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
    this.choose();
  }

  choose() {
    this.choice = this.oracle.choose();
  }
}
