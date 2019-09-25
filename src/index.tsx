import * as React from "react"
import { render } from "react-dom"
import EmojiPicker from "./EmojiPicker"

import "./styles.css"

function App() {
  return (
    <div className="app">
      <EmojiPicker />
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
