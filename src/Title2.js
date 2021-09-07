import React, { useMemo, useRef, useReducer } from 'react';
import { rStore, useRName } from './store';

function Title2() {
  const snapShot = useRName(rStore);

  const handleAddClick = () => {
    snapShot.name += '2';
  };

  return (
    <>
      <h6> - {snapShot.name}</h6>
      <button onClick={() => handleAddClick()}>Add Two</button>
    </>
  );
}

export default Title2;
