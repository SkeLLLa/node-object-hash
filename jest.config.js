module.exports = {
  cache: false,
  // collectCoverage: true, // prevents ts-jest bug
  collectCoverageFrom: ['src/**/*.(ts|js)'],
  coverageReporters: ['lcov', 'text'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      disableSourceMapSupport: true,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.spec.(ts|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
  preset: 'ts-jest',
};
