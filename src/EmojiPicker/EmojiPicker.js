import React from "react";
import "./EmojiPicker.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoriesListing from "./components/CategoriesListing";
import Footer from "./components/Footer";

// TODO add emojilib https://github.com/muan/emojilib
// TODO split emoji by categories https://emojipedia.org

const EmojiPicker = () => (
  <div className="emoji-picker">
    <Header />
    <div className="emoji-picker__search-wrapper">
      <Search />
    </div>
    <CategoriesListing />
    <Footer className="emoji-picker__footer" />
  </div>
);

export default EmojiPicker;
