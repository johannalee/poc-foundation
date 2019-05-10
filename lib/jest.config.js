const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('../tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-jest.ts'],
  setupFiles: ['<rootDir>/.jest/setup-require-context.js']
};
