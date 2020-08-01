import ArgumentsPrototype from "./ArgumentsPrototype.ts";

export default class ArgumentsParser {
  public static parse<T extends ArgumentsPrototype>(
    argv: string[],
    prototype: T,
  ): T | null {
    const anyProto = prototype as any;

    for (let key in prototype.argumentsBindings) {
      const shortName = prototype.argumentsBindings[key].shortName;

      if (argv.includes(`-${shortName}`)) {
        const index = argv.indexOf(`-${shortName}`);
        if (typeof anyProto[key] === typeof new Array<string>()) {
          anyProto[key] = new Array<string>();
          for (
            let add = 1;
            argv.length > index + add &&
            !argv[index + add].startsWith("-");
            add++
          ) {
            (anyProto[key] as string[]).push(argv[index + add]);
          }
        } else if (typeof anyProto[key] === typeof new String().valueOf()) {
          if (argv.length > index + 1) {
            if (!argv[index + 1].startsWith("-")) {
              anyProto[key] = argv[index + 1];
            }
          }
        } else if (typeof anyProto[key] === typeof new Boolean().valueOf()) {
          anyProto[key] = true;
        }
      }
    }

    return anyProto as T;
  }
}
