import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { server } from '@/mocks/server';

configure({ asyncUtilTimeout: 4500 });

/* eslint-disable no-console,jest/require-top-level-describe */
const originalError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };

  server.listen();
});

afterAll(() => {
  console.error = originalError;
  server.close();
});
/* eslint-enable no-console,jest/require-top-level-describe */
