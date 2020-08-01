# deno-arguments-parser

`deno-arguments-parser` is deno package for parsing arguments using decorators.

## How to use

To use `deno-arguments-parser` you need:

1. Import main.ts from the repository using following command.

   ```ts
   import {
     Argument,
     ArgumentsPrototype,
     ArgumentsParser,
   } from "https://raw.githubusercontent.    com/shabashab/deno-arguments-parser/    master/main.ts";
   ```

2. Create a class that extends `ArgumentsPrototype` class. On example:

   ```ts
   class ExampleClass extends ArgumentsPrototype {}
   ```

3. Apply `Argument` property decorator to properties you want to parse. `Argument` property decorator acccepts two optional parameters (at least one of them has to be filled to parse) -

   1. `shortName: string` - short name of argument. This name will be parsed if in console parameter will have prefix '-.
   2. `longName: string` - long name of argument. This name will be parsed if in console parameter will have prefix '--'.

   There are three types of variable types that currently supported:

   1. string - the only string that found after specified `-shortName` or `--longName` in console
   2. string[] - all strings that found after specified `-shortName` or `--longName` and before other `-shortName` or `--longName` in console
   3. boolean - will be true if specified `-shortName` or `--longName` is found in the list of arguments

   Example:

   ```ts
   class ExampleClass extends ArgumentsPrototpe {
     @Argument(
       "n", //shortName - '-n' in console
       "name" //longName - '--name' in console
     )
     name: string;

     constructor() {
       name = "John";
     }
   }
   ```

   Attention: The default values of the parameters should be set in class constructor

4. Finally, there are 2 ways to parse args using created class:

   1. Using `ArgumentsParser` class:

      ```ts
      let proto = new ExampleClass();

      ArgumentsParser.parse(
        Deno.args, //arguments array
        proto // an instance of a class that extends ArgumentsPrototype abstract class
      );
      ```

   2. Using method of `ArgumentsPrototype` abstract class
      ```ts
      let proto = new ExampleClass();
      proto.parseArgs(
        Deno.args //arguments array
      );
      ```
      The final results of parsing will be placed in variables of class instance.

   If arguments with such `longName` or `shortName` weren't found then value of variable won't be changed.
