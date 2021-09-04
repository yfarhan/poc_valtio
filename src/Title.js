import React, { useReducer } from 'react';
import { rStore, useRName } from './store';

function Title() {
  const nm = useRName(rStore);
  const forceUpdate = useReducer((c) => c + 1, 0)[1];

  const handleAddClick = () => {
    rStore.name += 1;
    forceUpdate();
  };

  return (
    <>
      <h1>[ {nm} ]</h1>
      <button onClick={() => handleAddClick()}>Add One</button>
    </>
  );
}

export default Title;
