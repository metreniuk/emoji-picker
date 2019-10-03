import * as React from "react";
import { render } from "react-dom";
import "./styles/reset.css";
import "./styles/global.css";

import EmojiPicker from "./EmojiPicker";

const rootElement = document.getElementById("root");

render(<EmojiPicker />, rootElement);
