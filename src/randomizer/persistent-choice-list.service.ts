import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { Choice, IChoice } from "./models/choice";

@Injectable()
export class PersistentChoiceList {
  private _list: Array<Choice<string>> = [];
  private LIST_KEY = 'randomList';

  constructor(private storage: Storage) { }

  getList(): Promise<Array<Choice<string>>> {
    return this.storage.get(this.LIST_KEY)
      .then((list: Array<IChoice<string>>) => {
        const rawList = list || this._list;
        this._list = rawList.map(obj => new Choice(obj.value, obj.label));
        return this._list;
      });
  }

  persist(list: Array<Choice<string>>) {
    return this.storage.set(this.LIST_KEY, list.map(choice => choice.toJs()));
  }
}