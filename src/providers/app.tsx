import { Suspense, type ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ReactLocation, Router } from '@tanstack/react-location';
import { queryClient } from '@/lib/react-query';
import { routes } from '@/routes';

const location = new ReactLocation();

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<>loading...</>}>
      <QueryClientProvider client={queryClient}>
        <Router location={location} routes={routes}>
          {children}
        </Router>
      </QueryClientProvider>
      <ToastContainer />
    </Suspense>
  );
};
