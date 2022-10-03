import { renderApp } from '@/test/testUtils';

describe('Todos', () => {
  it('renders', async () => {
    const { findByText } = renderApp({ route: '/todos' });
    await findByText('Todo App');
    await findByText('todo1');
    await findByText('todo2');
    await findByText('todo3');
  });
});
