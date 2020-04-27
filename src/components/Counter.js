import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleInput(event) {
    setCount(Math.floor(event.target.value));
  }

  return (
    <div>
      <p>Start the counter at:</p>
      <input onChange={handleInput}></input>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>> +1</button>
      <button onClick={() => setCount(count - 1)}>> -1</button>
    </div>
  );
}

export default Counter;
