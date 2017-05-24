import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Choice } from "../../randomizer/models/choice";
import { PersistentChoiceList } from "../../randomizer/persistent-choice-list.service";
import { RandomFromList } from "../../randomizer/list";

@Component({
  selector: 'page-list-answer',
  templateUrl: 'list-answer.html',
  providers: []
})
export class ListAnswerPage {
  list: Array<Choice<string>>;
  choice: Choice<string> = new Choice('');

  constructor(public navCtrl: NavController, private persistentList: PersistentChoiceList) {
    persistentList.getList()
      .then(list => {
        this.list = list;
        this.choose();
      });
  }

  choose() {
    this.choice = RandomFromList.choose(this.list);
  }
}
