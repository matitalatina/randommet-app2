import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Oracle } from "../../randomizer/oracle";
import { Choice } from "../../randomizer/models/choice";

@Component({
  selector: 'page-oracle',
  templateUrl: 'oracle.html'
})
export class OraclePage {
  choose: Choice<string>;

  constructor(public navCtrl: NavController) {
    this.choose = Oracle.choose();
  }

}
