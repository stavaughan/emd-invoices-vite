module.exports = {
  displayName: 'BACKEND',
  rootDir: './',
  testEnvironment: 'jsdom',
  bail: true,
  verbose: true,
  onlyChanged: true,
  cacheDirectory: '<rootDir>/tmp/jest',
  testMatch: ['<rootDir>/backend/**/*.test.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/backend/**/*.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['json', 'html'],
};
