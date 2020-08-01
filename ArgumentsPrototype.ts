import ArgumentsBindings from "./ArgumentsBindings.ts";
import ArgumentsParser from "./ArgumentsParser.ts";
export default abstract class ArgumentsPrototype {
  public argumentsBindings: ArgumentsBindings = new ArgumentsBindings(this);
  public parseArgs(args: string[]) {
    return ArgumentsParser.parse(args, this);
  }
}
