import { renderApp } from '@/test/testUtils';
import { server } from '@/mocks/server';
import { http, HttpResponse } from 'msw';

describe('Todos', () => {
  it('renders', async () => {
    server.use(
      http.get('/todos', async () => {
        return HttpResponse.json(
          {
            todos: [{ id: 1, title: 'todo11', done: false }],
          },
          { status: 200 }
        );
      })
    );

    const { findByText } = renderApp({ route: '/todos' });
    await findByText('Todo App');
    await findByText('todo11');
  });
});
