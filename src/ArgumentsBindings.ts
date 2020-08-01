import ArgumentsBinding from "./ArgumentsBinding.ts";
import ArgumentsPrototype from "./ArgumentsPrototype.ts";

export default class ArgumentsBindings {
  [key: string]: ArgumentsBinding
  constructor(proto: ArgumentsPrototype | null = null) {
    if (proto !== null) {
      if (proto.argumentsBindings !== undefined) {
        return proto.argumentsBindings;
      }
    }
  }
}
