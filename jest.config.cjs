module.exports = {
  displayName: 'BACKEND',
  bail: true,
  verbose: true,
  onlyChanged: true,
  testMatch: ['**/*.test.{js}'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2021',
        },
      },
    ],
  },
  moduleNameMapper: {
    '^/(.*)$': '<rootDir>/backend/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'backend/**/*.{js}',
    '!backend/handler.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/frontend/**',
    '!**/dist/**',
    '!*.cjs',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Invoices Backend API Test Report',
      },
    ],
  ],
};
