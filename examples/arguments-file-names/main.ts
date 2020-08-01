import FilesArgumentsPrototype from "./src/FilesArgumentsPrototype.ts";

let proto = new FilesArgumentsPrototype();
proto.parseArgs(Deno.args);

console.log(proto.files);
