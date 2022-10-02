import { Suspense, type ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import { ReactLocation, Router } from '@tanstack/react-location';
import { queryClient } from '@/lib/react-query';
import { routes } from '@/routes';

const ErrorFallback = () => {
  return (
    <div
      className="bg-gray-700 text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

const location = new ReactLocation();

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<>loading...</>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Router location={location} routes={routes}>
            {children}
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
      <ToastContainer />
    </Suspense>
  );
};
