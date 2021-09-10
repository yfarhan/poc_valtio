import React from 'react';
import { rStore } from './store';
import { useAxion } from 'axion';

function Title() {
  const snapShot = useAxion(rStore);

  const handleAddClick = () => {
    snapShot.name += '1';
  };

  return (
    <>
      {/* <h6> - {snapShot.name}</h6> */}
      <h6> - {snapShot.name}</h6>
      <button onClick={() => handleAddClick()}>Add One</button>
    </>
  );
}

export default Title;
