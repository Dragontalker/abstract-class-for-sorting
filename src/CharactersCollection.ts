export class NumbersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }
}