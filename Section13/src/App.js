import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Paragraph from "./components/Paragraph";

function App() {
  const [show, setshow] = useState(false);
  const [toogle, settoogle] = useState(false);
  const [newtoogle, setNewToogle] = useState(false);
  const showParagarph = useCallback(() => {
    if (toogle) {
      setshow((currentValue) => !currentValue);
    }
  }, [toogle]);

  function showToogleData() {
    settoogle(true);
    setNewToogle(true);
  }

  console.log("App IS Running");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Paragraph show={show}></Paragraph>
      <Button onClick={showToogleData}> Show Toggle</Button>
      <Button onClick={showParagarph}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
