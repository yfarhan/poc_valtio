import React from 'react';

function TodoRow({ todo }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: todo.completed ? 'line-through' : 'initial',
      }}
    >
      <h2>{todo.name}</h2>
    </div>
  );
}

export default TodoRow;
