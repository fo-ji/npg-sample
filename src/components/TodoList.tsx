import type { FC, FormEventHandler } from 'react';
import { useEffect, useState } from 'react';

import {
  type TodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useTodosQuery,
  useUpdateTodoMutation,
} from '@/generated/request';

export const TodoList: FC = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState<TodosQuery['todos']>([]);
  const { data, loading, error } = useTodosQuery();
  const [addTodoMutation] = useAddTodoMutation();
  const [updateTodoMutation] = useUpdateTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();

  // MEMO: stateで管理する意味あるのか
  useEffect(() => {
    setTodos(data?.todos ?? []);
  }, [data?.todos]);

  // MEMO: 雑すぎる
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data?.todos) return null;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { data } = await addTodoMutation({ variables: { title } });
    data?.addTodo && setTodos((prev) => [data.addTodo, ...prev]);
    setTitle('');
  };

  const handleChange = async (
    todoId: string,
    completed: boolean
  ): Promise<void> => {
    const { data } = await updateTodoMutation({
      variables: { todoId, completed },
    });
    data?.updateTodo &&
      setTodos((prev) => {
        return prev.map((todo) =>
          todo.id === data.updateTodo.id ? data.updateTodo : todo
        );
      });
  };

  const handleDelete = async (todoId: string): Promise<void> => {
    if (confirm('really delete OK?')) {
      const { data } = await deleteTodoMutation({
        variables: { todoId },
      });
      data?.deleteTodo &&
        setTodos((prev) => {
          return prev.filter((todo) => todo.id !== data.deleteTodo.id);
        });
    }
  };

  return (
    <div className="p-5 border rounded">
      TodoList
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="p-2 border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-gray-300 p-2">add</button>
      </form>
      <ul className="mt-5">
        {todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed && 'line-through'}`}>
            <span>
              {todo.completed ? '✔︎' : '👀'} {todo.title}
            </span>
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={(e) => handleChange(todo.id, e.target.checked)}
            />
            <span> / </span>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
