import React from 'react';
import './App.css';
import AddTodoInput from './AddTodoInput';
import TodoList from './TodoList';
// import Counter from './Counter';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <div className="App">
        <h1>Todo</h1>
        <AddTodoInput />
        <TodoList />
        <br />
        {/* <Counter /> */}
        <Title />
      </div>
    </div>
  );
}

export default App;
