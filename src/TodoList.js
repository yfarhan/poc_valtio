import React, { useEffect } from 'react';
import { useTodos, useRName, subTodos } from './store';
import TodoRow from './TodoRow';

function TodoList() {
  const todos = useTodos();
  const nm = useRName();

  useEffect(() => {
    subTodos((state) => {
      console.log('[ todos changed ]', state);
    });
  }, []);

  return (
    <div>
      <h5>latest : {nm}</h5>
      {todos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
