import { Choice } from "./models/choice";

interface Chooser<T> {
  choose(): Choice<T>;
}