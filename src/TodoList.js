import React, { useEffect } from 'react';
import { useTodos, subTodos } from './store';
import TodoRow from './TodoRow';

function TodoList() {
  const todos = useTodos();
  // const nm = useRName();

  useEffect(() => {
    subTodos((state) => {
      console.log('[ todos changed ]', state);
    });
  }, []);

  return (
    <div>
      <h5>latest</h5>
      {todos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
