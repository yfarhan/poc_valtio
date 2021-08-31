import React from 'react';
import './App.css';
import AddTodoInput from './AddTodoInput';
import TodoList from './TodoList';

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

export default App;
