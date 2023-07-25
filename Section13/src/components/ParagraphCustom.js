import React from "react";
function ParagraphCustom(props) {
  console.log("Custom App Running");
  return <p>{props.children}</p>;
}
export default ParagraphCustom;
