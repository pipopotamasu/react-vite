module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  rootDir: './src',
  transform: {
    '^.+\\.css$': '<rootDir>/tests/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/tests/config/fileTransform.js',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/config/setupTest.ts'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
  },
};
