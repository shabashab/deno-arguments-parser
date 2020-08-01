import ArgumentsPrototype from "./ArgumentsPrototype.ts";
import ArgumentsBinding from "./ArgumentsBinding.ts";
import ArgumentsBindings from "./ArgumentsBindings.ts";

export default function (
  shortName: string | null = null,
  longName: string | null = null,
) {
  return function <T extends ArgumentsPrototype>(target: T, key: string) {
    if (typeof target.argumentsBindings === typeof undefined) {
      target.argumentsBindings = new ArgumentsBindings();
    }
    target.argumentsBindings[key] = new ArgumentsBinding(
      shortName,
      longName,
    );
  };
}
