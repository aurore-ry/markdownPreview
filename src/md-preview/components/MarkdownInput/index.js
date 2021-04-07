import React from "react";
import "./styles.scss";

export const MarkdownInput = ({ value, onValueChange }) => {
  return (
    <textarea id="editor" onChange={onValueChange}>
      {value}
    </textarea>
  );
};
