import React, { useEffect } from 'react';
import { useTodos, subTodos } from './store';
import TodoRow from './TodoRow';

function TodoList() {
  const todos = useTodos();

  useEffect(() => {
    subTodos((state) => {
      console.log('[ todos changed ]', state);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
export default TodoList;
