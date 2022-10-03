import type { ReactNode } from 'react';
import { ReactLocation, Router, Outlet } from '@tanstack/react-location';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import { queryClient } from '@/lib/react-query';
import { routes } from '@/routes';

type TestAppProviderProps = {
  children: ReactNode;
};

const TestAppProvider = ({ children }: TestAppProviderProps) => {
  const location = new ReactLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router location={location} routes={routes}>
          {children}
        </Router>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
};

export const renderApp = ({
  options = {},
  route = '/',
}: {
  options?: RenderOptions;
  route?: string;
} = {}) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(<Outlet />, {
    wrapper: TestAppProvider,
    ...options,
  });
};

export * from '@testing-library/react';
