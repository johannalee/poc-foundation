import { chain, Rule } from '@angular-devkit/schematics';
import { processTemplates } from "../../rules/process-template";
import { SchemaOptions } from "../../types";

export default function(options: SchemaOptions): Rule {
  return chain([
    processTemplates(options),
  ]);
}
