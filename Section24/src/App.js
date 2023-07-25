import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
  const [state, setState] = useState(false);

  function closeoropenModelHandler() {
    setState(true);
  }
  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal show={state} />
      <Backdrop />
      <button className="Button" onClick={closeoropenModelHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
