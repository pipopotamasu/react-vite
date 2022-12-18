import { renderApp } from '@/test/testUtils';
import { server } from '@/mocks/server';
import { rest } from 'msw';

describe('Todos', () => {
  it('renders', async () => {
    server.use(
      rest.get('/todos', async (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            todos: [{ id: 1, title: 'todo11', done: false }],
          })
        );
      })
    );

    const { findByText } = renderApp({ route: '/todos' });
    await findByText('Todo App');
    await findByText('todo11');
  });
});
