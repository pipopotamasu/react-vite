import { http, HttpResponse } from 'msw';
import type { Todo } from '@/features/todos';

const todos: Todo[] = [
  { id: 1, title: 'todo1', done: false },
  { id: 2, title: 'todo2', done: true },
  { id: 3, title: 'todo3', done: false },
];

export const todosHandlers = [
  http.get('/todos', () => {
    return HttpResponse.json(JSON.stringify({ todos }), { status: 200 });
  }),
  http.post('/todos', async ({ request }) => {
    const body = await request.json();
    const { title } = body as Pick<Todo, 'title'>;

    return HttpResponse.json(
      JSON.stringify({
        todo: {
          id: 4,
          title,
          done: false,
        },
      }),
      { status: 201 }
    );
  }),
];
