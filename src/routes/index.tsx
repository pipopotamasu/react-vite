import { queryClient } from '@/lib/react-query';
import { About } from '@/features/about';
import { Todos, getTodos } from '@/features/todos';

export const routes = [
  { path: '/', element: <About /> },
  {
    path: '/todos',
    element: <Todos />,
    loader: async () => {
      return {
        todos:
          queryClient.getQueryData('todos') ?? (await queryClient.fetchQuery('todos', getTodos)),
      };
    },
  },
];
