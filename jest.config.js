const config = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'json-summary'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'scripts/**/*.{ts,tsx,js,jsx}',
    'npm/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/tests/**'
  ],
  projects: [
    {
      displayName: 'unit-tests',
      testMatch: [
        '**/tests/unit/**/*.test.[jt]s',
        '!**/netlify/**/*.test.*'
      ],
      transform: {
        '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './tests/babel.test.config.cjs' }],
      },
    },
    {
      displayName: 'integration-tests',
      testMatch: [
        '**/tests/integration/**/*.test.[jt]s'
      ],
      transform: {
        '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './tests/babel.test.config.cjs' }],
      },
    }
  ]
};

export default config;
