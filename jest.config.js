module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  rootDir: './src',
  transform: {
    '^.+\\.css$': '<rootDir>/test/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/test/config/fileTransform.js',
  },
  setupFilesAfterEnv: ['<rootDir>/test/config/setupTest.ts'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
  },
};
