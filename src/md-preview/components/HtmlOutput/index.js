import React from "react";
import "./styles.scss";

export const HtmlOutput = ({ value }) => {
  return <div id="preview" dangerouslySetInnerHTML={{ __html: value }} />;
};
