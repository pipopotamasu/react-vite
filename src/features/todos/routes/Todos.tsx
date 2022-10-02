import { useTodos } from '../api/getTodos';

export const Todos = () => {
  const { data, isLoading } = useTodos({ config: { useErrorBoundary: false } });

  if (isLoading) return <>loading...</>;

  return (
    <ul>
      {data?.todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};
