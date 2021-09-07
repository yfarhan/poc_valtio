import React, { useState, useReducer, useCallback } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [tStore, toggle] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedCallback = useCallback(() => {
    doSomething();
  }, [tStore]);

  function doSomething() {
    console.log('[ doSomething ]', state);
  }

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <br />
      <button onClick={() => toggle(!tStore)}>Toggle button</button>
      {tStore ? <h5>True</h5> : <h5>False</h5>}
      <button onClick={memoizedCallback}>MemoCallback</button>
    </>
  );
}

export default Counter;
