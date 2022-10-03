import { rest } from 'msw';
import type { Todo } from '@/features/todos';

const todos: Todo[] = [
  { id: 1, title: 'todo1', done: false },
  { id: 2, title: 'todo2', done: true },
  { id: 3, title: 'todo3', done: false },
];

export const todosHandlers = [
  rest.get('/todos', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        todos,
      })
    );
  }),
  rest.post('/todos', async (req, res, ctx) => {
    const body = await req.json<Omit<Todo, 'id'>>();

    return res(
      ctx.status(200),
      ctx.json({
        todo: {
          id: 4,
          title: body.title,
          done: false,
        },
      })
    );
  }),
];
