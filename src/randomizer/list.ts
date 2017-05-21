import { sample } from "lodash";

export class RandomFromList {

  static choose<T>(list: Array<T>): T {
    return sample(list);
  }

}