import { useEffect, useState } from "react";
import marked from "marked";

import { MarkdownInput } from "./md-preview/components/MarkdownInput";
import { HtmlOutput } from "./md-preview/components/HtmlOutput";
import { DEFAULT_MARKDOWN_INPUT_TEXT } from "./md-preview/constants";

import "./App.scss";

const App = () => {
  const [markdownInputText, setMarkdownInputText] = useState(
    DEFAULT_MARKDOWN_INPUT_TEXT
  );
  const [htmlOutput, setHtmlOutput] = useState("");

  const onValueChange = (ev) => {
    console.log("onValueChange", ev);
    setMarkdownInputText(ev.target.value);
  };

  useEffect(() => {
    setHtmlOutput(marked(markdownInputText, { breaks: true }));
  }, [markdownInputText]);

  return (
    <div className="App">
      <MarkdownInput onValueChange={onValueChange} value={markdownInputText} />
      <HtmlOutput value={htmlOutput} />
    </div>
  );
};

export default App;
