import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Choice } from "../../randomizer/models/choice";
import { PersistentChoiceList } from "../../randomizer/persistent-choice-list.service";
import { ListAnswerPage } from "../list-answer/list-answer.component";

@Component({
  selector: 'page-list-edit',
  templateUrl: 'list-edit.html',
  providers: []
})
export class ListEditPage {
  list: Array<Choice<string>>;
  choiceValue: string = '';

  constructor(public navCtrl: NavController, private persistentList: PersistentChoiceList) {
    persistentList.getList()
      .then(list => {
        this.list = list;
      });
  }

  addChoice($event): Promise<Array<Choice<string>>> {
    if (this.choiceValue) {
      this.list.push(new Choice(this.choiceValue));
      this.choiceValue = '';
      return this.persistentList.persist(this.list)
        .then(() => this.list);
    }

    return Promise.resolve(this.list);
  }

  removeChoice(index) {
    this.list.splice(index, 1);
    return this.persistentList.persist(this.list);
  }

  goToAnswer() {
    this.navCtrl.push(ListAnswerPage);
  }

  deleteAll() {
    this.list = [];
    return this.persistentList.persist(this.list);
  }
}
