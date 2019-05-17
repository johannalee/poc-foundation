import {
  Rule,
  apply, branchAndMerge, mergeWith, template, url, Tree, SchematicsException, move
} from '@angular-devkit/schematics';
import { SchemaOptions } from '../types';
import * as stringUtils from "@angular-devkit/core/src/utils/strings";

export function processTemplates (options: SchemaOptions): Rule {
  return (tree: Tree) => {
    const workspaceConfig = tree.read('/angular.json');

    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace = JSON.parse(workspaceContent);
    const project = workspace.projects[options.project];

    if (!options.path) {
      options.path = `${project.sourceRoot}`;
    }

    const templateSource = apply(
      url('./files'),
      [
        template({
          ...stringUtils,
          ...options,
        }),
        move(options.path)
      ]
    );

    return branchAndMerge(mergeWith(templateSource));
  };
}
