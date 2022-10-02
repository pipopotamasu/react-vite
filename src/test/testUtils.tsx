import type { ReactElement } from 'react';
import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import { AppProvider } from '@/providers/app';

export const render = ({
  ui,
  options = {},
  route = '/',
}: {
  ui: ReactElement;
  options?: RenderOptions;
  route?: string;
}) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(ui, {
    wrapper: AppProvider,
    ...options,
  });
};

export * from '@testing-library/react';
