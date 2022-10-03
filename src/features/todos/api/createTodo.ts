import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import type { MutationConfig } from '@/lib/react-query';

import type { Todo } from '../types';

type RequestBody = {
  title: Todo['title'];
};

type ResponseBody = {
  todo: Todo;
};

const createTodo = (body: RequestBody): Promise<ResponseBody> => {
  return axios.post('/todos', body);
};

type UseCreateTodoOptions = {
  config?: MutationConfig<typeof createTodo>;
};

export const useCreateTodo = ({ config }: UseCreateTodoOptions = {}) => {
  return useMutation(createTodo, config);
};
