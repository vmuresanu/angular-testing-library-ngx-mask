import { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  rootDir: './',
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 41,
      lines: 71,
      statements: 70,
    },
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'json-summary', 'text'],
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|js|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    '^deepdash-es/(.*)$': '<rootDir>/node_modules/deepdash/$1',
    '^@services(.*)$': '<rootDir>/src/app/services$1',
    '^@enums(.*)$': '<rootDir>/src/app/enums$1',
    '^@environments(.*)$': '<rootDir>/src/environments$1',
    '^@models(.*)$': '<rootDir>/src/app/models$1',
  },
};

export default config;
