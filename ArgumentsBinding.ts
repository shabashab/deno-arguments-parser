export default class ArgumentsBinding {
  shortName: string | null;
  longName: string | null;

  constructor(
    shortName: string | null = null,
    longName: string | null = null,
  ) {
    this.shortName = shortName;
    this.longName = longName;
  }
}
