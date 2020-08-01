import ArgumentsParser from "./ArgumentsParser.ts";
import ArgumentsPrototype from "./ArgumentsPrototype.ts";
import Argument from "./Argument.ts";

class Prototype extends ArgumentsPrototype {
  @Argument(
    "n",
    "name",
  )
  name: string;

  @Argument(
    "s",
    "sname",
  )
  sName: string[];

  @Argument(
    "e",
  )
  exists: boolean;

  constructor() {
    super();
    this.name = "";
    this.sName = [];
    this.exists = false;
  }
}

let proto = new Prototype();
proto.parseArgs(Deno.args);

console.log(proto.name);
console.log(proto.sName);
