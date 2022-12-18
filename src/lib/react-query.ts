import type { AxiosError } from 'axios';
import { QueryClient, UseQueryOptions, UseMutationOptions, DefaultOptions } from 'react-query';
import type { PromiseValue } from 'type-fest';
import { toast } from 'react-toastify';

const onError = (error: AxiosError) => {
  const status = error.response?.status;
  switch (status) {
    case 400:
      toast.error(error.message);
      break;
    case 401:
      toast.error('Unauthorized.');
      break;
    case 403:
      toast.error('Fobidden.');
      break;
    case 404:
      toast.error('404 Not Found.');
      break;
    case 500:
      toast.error('Internal Server Error.');
      break;
    case undefined:
      toast.error('Network Error.');
      break;
  }
};

const queryConfig: DefaultOptions<AxiosError> = {
  queries: {
    staleTime: 30000,
    refetchOnWindowFocus: false,
    retry: false,
    suspense: true,
    onError,
  },
  mutations: {
    onError,
  },
};

// @ts-ignore
export const queryClient = new QueryClient({ defaultOptions: queryConfig });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractFnReturnType<FnType extends (...args: any) => any> = PromiseValue<
  ReturnType<FnType>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>, AxiosError>,
  'queryKey' | 'queryFn'
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
