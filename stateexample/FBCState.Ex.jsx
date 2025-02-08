import React from 'react';

const FBCStateEx = () => {
  const [value, setValue] = React.useState(0);
  console.log(value);

  const changeValue = () => {
    setValue(100);
  }

  return (
    <div>
      FBCStateEx
      <h1>{value}</h1>
      <button onClick={changeValue}>Click</button>
    </div>
  );
}

export default FBCStateEx;