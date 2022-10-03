import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { toast } from 'react-toastify';
import { queryClient } from '@/lib/react-query';
import { useTodos } from '../api/getTodos';
import { useCreateTodo } from '../api/createTodo';

export const Todos = () => {
  const [input, setInput] = useState('');
  const todosQuery = useTodos();
  const createTodoMutation = useCreateTodo({
    config: {
      onSuccess() {
        queryClient.invalidateQueries(['todos']);
        toast.info('New todo has been added.');
        setInput('');
      },
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '' || createTodoMutation.isLoading) return;
    createTodoMutation.mutate({ title: input });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setInput(val);
  };

  if (todosQuery.isLoading) return <>loading...</>;

  return (
    <MainLayout>
      <h1 className="font-bold text-4xl mb-4">Todo App</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input className="text-black" type="text" value={input} onChange={onChange} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todosQuery.data?.todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    </MainLayout>
  );
};
