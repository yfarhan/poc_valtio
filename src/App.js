import React, { useState, useEffect } from 'react';
import './App.css';
import { actions, useTodos, subTodos } from './store';

function App() {
  return (
    <div className="App">
      <div className="App">
        <h1>Todo</h1>
        <AddTodoInput />

        <TodoList />
      </div>
    </div>
  );
}

function AddTodoInput() {
  const [value, setValue] = useState('');

  function handleSubmit() {
    actions.addTodo({ name: value });
    setValue('');
  }

  return (
    <div>
      <input type="text" value={value} onChange={({ target }) => setValue(target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

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

export default App;
