import ArgumentsPrototype from "./ArgumentsPrototype.ts";

export default class ArgumentsParser {
  private static parseArgumentById(
    index: number,
    proto: any,
    argv: string[],
    key: string,
  ) {
    if (typeof proto[key] === typeof new Array<string>()) {
      proto[key] = new Array<string>();
      for (
        let add = 1;
        argv.length > index + add &&
        !argv[index + add].startsWith("-");
        add++
      ) {
        (proto[key] as string[]).push(argv[index + add]);
      }
    } else if (typeof proto[key] === typeof new String().valueOf()) {
      if (argv.length > index + 1) {
        if (!argv[index + 1].startsWith("-")) {
          proto[key] = argv[index + 1];
        }
      }
    } else if (typeof proto[key] === typeof new Boolean().valueOf()) {
      proto[key] = true;
    }
  }

  public static parse<T extends ArgumentsPrototype>(
    argv: string[],
    prototype: T,
  ): T | null {
    const anyProto = prototype as any;

    for (let key in prototype.argumentsBindings) {
      const shortName = prototype.argumentsBindings[key].shortName;
      const longName = prototype.argumentsBindings[key].longName;

      if (argv.includes(`-${shortName}`)) {
        const index = argv.indexOf(`-${shortName}`);
        this.parseArgumentById(index, anyProto, argv, key);
      }

      if (argv.includes(`--${longName}`)) {
        const index = argv.indexOf(`--${longName}`);
        this.parseArgumentById(index, anyProto, argv, key);
      }
    }

    return anyProto as T;
  }
}
