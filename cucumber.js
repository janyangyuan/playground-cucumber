const common = {
  publishQuiet: true,
  requireModule: ['ts-node/register', 'tsconfig-paths/register'],
  require: ['./tests/**/*.ts'],
  formatOptions: { snippetInterface: 'async-await' }
};

const cli = {
  ...common,
  paths: ['./tests/features']
};

module.exports = {
  //for CucumberJS Test Runner
  cucumberJSTestRunner: {
    ...common,
  },
  //for local run with npm command
  default: {
    ...cli,
    format: ['progress-bar', 'html:cucumber-report.html']
  }
};
