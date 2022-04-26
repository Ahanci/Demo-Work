import MarkdownEditor from "@uiw/react-markdown-editor";
import { useState } from "react";

export default function App() {
  const [markdownVal, setMarkdownVal] = useState("");
  console.log("markdownVal:", markdownVal);
  return (
    <div>
      <h3>Auto</h3>
      <div className="App">
        <MarkdownEditor
          value="# title"
          onChange={(editor, data, value) => {
            setMarkdownVal(value);
          }}
        />
      </div>
    
      
    </div>
  );
}