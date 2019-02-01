import React from 'react';

const PinButtonItem = ({ pin, click }) => {
  return (
    <button type="button" onClick={click} id={pin}>{pin}</button>
  );
};

export default PinButtonItem;
