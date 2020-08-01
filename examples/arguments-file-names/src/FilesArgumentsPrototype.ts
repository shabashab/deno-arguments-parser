import {
  Argument,
  ArgumentsPrototype,
} from "https://raw.githubusercontent.com/shabashab/deno-arguments-parser/master/main.ts";

export default class FilesArgumentsPrototype extends ArgumentsPrototype {
  @Argument(
    "f",
    "files",
  )
  files: string[];

  constructor() {
    super();
    this.files = [];
  }
}
