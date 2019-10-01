import React, { useState } from "react";
import "./EmojiPicker.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoriesListing from "./components/CategoriesListing";
import Footer from "./components/Footer";

const EmojiPicker = () => {
  const [scrolledSections, setScrolledSections] = useState<boolean[] | []>([]);

  return (
    <div className="emoji-picker">
      <Header />
      <Search
        className="emoji-picker__search"
        scrolledSections={scrolledSections}
      />
      <CategoriesListing
        scrolledSections={scrolledSections}
        setScrolledSections={setScrolledSections}
      />
      <Footer className="emoji-picker__footer" />
    </div>
  );
};

export default EmojiPicker;
