import React from "react";

import "./Modal.css";

function Modal(props) {
  const cssClass = "Modal" + props.show ? "ModelOpen" : "ModelClose";
  return (
    <div className={cssClass}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}
export default Modal;
