import React from "react";
import ParagraphCustom from "./ParagraphCustom";
function Paragraph(props) {
  console.log("Moving to Paragraph");
  return (
    <ParagraphCustom>
      {props.show ? "Showing the Paragraph" : ""}
    </ParagraphCustom>
  );
}
export default React.memo(Paragraph);
