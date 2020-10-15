module.exports = function () {
  return {
    autoDetect: true,
    testFramework: {
      path: 'node_modules',
      configFile: './jest.config.js'
    },
    env: {
      type: 'node'
    },
    filesWithNoCoverageCalculated: ['src/server.ts', 'src/app.ts'],
    debug: true
  };
};
