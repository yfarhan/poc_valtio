import React, { useState } from 'react';
import { actions } from './store';

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

export default AddTodoInput;
