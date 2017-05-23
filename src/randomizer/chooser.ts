import { Choice } from "./models/choice";

export interface Chooser<T> {
  choose(): Choice<T>;
}