import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';

import type { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import type { Todo } from '../types';

type Response = {
  todos: Todo[];
};

export const getTodos = (): Promise<Response> => {
  return axios.get('/todos');
};

type QueryFnType = typeof getTodos;

type UseTodosOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTodos = ({ config }: UseTodosOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  });
};
