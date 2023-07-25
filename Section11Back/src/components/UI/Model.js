import React from "react";

import ReactDom from "react-dom";
import classes from "./Model.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.isClose}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const placingmodel = document.getElementById("overlay");
function Model(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop isClose={props.isClose}></Backdrop>,
        placingmodel
      )}
      {ReactDom.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        placingmodel
      )}
    </React.Fragment>
  );
}

export default Model;
