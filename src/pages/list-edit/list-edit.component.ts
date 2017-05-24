import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Choice } from "../../randomizer/models/choice";
import { PersistentChoiceList } from "../../randomizer/persistent-choice-list.service";

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
    console.log('asds')
    if (this.choiceValue) {
      this.list.push(new Choice(this.choiceValue));
      return this.persistentList.persist(this.list)
        .then(() => this.list);
    }

    return Promise.resolve(this.list);
  }

  goToAnswer() {

  }
}
