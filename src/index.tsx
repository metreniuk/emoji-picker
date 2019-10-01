import * as React from "react";
import { render } from "react-dom";
import "./reset.css";
import "./styles.css";

import EmojiPicker from "./EmojiPicker";

function App() {
  return (
    <div className="app">
      <EmojiPicker />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
