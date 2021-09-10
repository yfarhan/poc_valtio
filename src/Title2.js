import React from 'react';
import { rStore } from './store';
import { useAxion } from 'axion';

function Title2() {
  const snapShot = useAxion(rStore);

  const handleAddClick = () => {
    snapShot.name += '2';
  };

  return (
    <>
      {/* <h6> - {snapShot.name}</h6> */}
      <h6> - {snapShot.name}</h6>
      <button onClick={() => handleAddClick()}>Add One</button>
    </>
  );
}

export default Title2;
