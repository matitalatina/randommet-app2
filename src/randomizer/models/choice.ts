export class Choice<T> {
  private _label;

  constructor(public value: T, label?: string) {
    this._label = label;
  }

  get label(): string {
    return this._label || String(this.value);
  }
}