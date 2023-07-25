import React, { useState } from "react";

function Greetings() {
  const [state, setstate] = useState(false);

  function stateHandler() {
    setstate((perviousValue) => !perviousValue);
  }

  return (
    <div>
      <p>Hello world</p>
      {!state && <h1>This is using for the state value</h1>}
      {state && <h1>Chaging by state</h1>}
      <button onClick={stateHandler}>Click Me!</button>
    </div>
  );
}

export default Greetings;
