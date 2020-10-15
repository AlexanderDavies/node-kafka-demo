module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './reports',
  testMatch: ['**/src/**/*.spec.ts', '**/test/**/*.spec.ts'],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75
      // statements: -10
    }
  }
};
