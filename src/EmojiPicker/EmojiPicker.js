import React from "react"
import "./EmojiPicker.css"

import Header from "./components/Header"
import Search from "./components/Search"
import Section from "./components/Section"
import Footer from "./components/Footer"

// TODO add emojilib https://github.com/muan/emojilib
// TODO split emoji by categories https://emojipedia.org

const EmojiPicker = () => (
  <div className="emoji-picker">
    <Header />
    <div className="emoji-picker__content">
      <Search className="emoji-picker__search" />
      <Section className="emoji-picker__section" title="Frequently used" />
      <Section className="emoji-picker__section" title="Smileys & people" />
      {/* More sections */}
    </div>
    <Footer className="emoji-picker__footer" />
  </div>
)

export default EmojiPicker
