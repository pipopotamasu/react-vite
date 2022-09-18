import { rest } from 'msw';

const todos = [
  { id: 1, title: 'todo1', done: false },
  { id: 2, title: 'todo2', done: true },
  { id: 3, title: 'todo3', done: false },
];

export const handlers = [
  rest.get('/todos', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        todos,
      })
    );
  }),
];
