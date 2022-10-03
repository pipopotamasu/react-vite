import { Outlet } from '@tanstack/react-location';
import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import { AppProvider } from '@/providers/app';

export const renderApp = ({
  options = {},
  route = '/',
}: {
  options?: RenderOptions;
  route?: string;
} = {}) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(<Outlet />, {
    wrapper: AppProvider,
    ...options,
  });
};

export * from '@testing-library/react';
