import { useQuery } from 'react-query';
import type { AxiosError } from 'axios';
import { axios } from '@/lib/axios';

import type { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import type { Todo } from '../types';

type ResponseBody = {
  todos: Todo[];
};

const getTodos = (): Promise<ResponseBody> => {
  return axios.get('/todos');
};

type QueryFnType = typeof getTodos;

type UseTodosOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTodos = ({ config }: UseTodosOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>, AxiosError>({
    ...config,
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  });
};
