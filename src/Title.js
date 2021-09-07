import React, { useMemo, useRef, useReducer } from 'react';
import { rStore, useRName } from './store';

function Title() {
  const snapShot = useRName(rStore);

  const handleAddClick = () => {
    snapShot.name += '1';
  };

  return (
    <>
      <h6> - {snapShot.name}</h6>
      <button onClick={() => handleAddClick()}>Add One</button>
    </>
  );
}

export default Title;
