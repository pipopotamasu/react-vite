import { About } from '@/features/about';
import { Todos } from '@/features/todos';

export const routes = [
  { path: '/', element: <About /> },
  { path: '/todos', element: <Todos /> },
];
