import React, { useState } from "react";
import "./EmojiPicker.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoriesListing from "./components/CategoriesListing";
import Footer from "./components/Footer";
import { UserCategory, ScrolledSection, EmojiEntry } from "./types";
import emojiShape from "../emoji-list";

const emojiEntries = Object.entries(emojiShape) as EmojiEntry[];
const emoji: EmojiEntry[] = [["recent", []], ...emojiEntries];

const EmojiPicker = () => {
  const [scrolledSections, setScrolledSections] = useState<
    ScrolledSection[] | []
  >([]);
  const [activeCategory, setActiveCategory] = useState<UserCategory>("recent");

  const handleCategoryClick = category => {
    setActiveCategory(category);
    const sectionIndex = emoji.findIndex(([id]) => category === id);
    const scrolledSection = scrolledSections[sectionIndex];
    if (scrolledSection) {
      scrolledSection.section.current.scrollIntoView();
    }
  };

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
        emoji={emoji}
      />
      <Footer
        className="emoji-picker__footer"
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
};

export default EmojiPicker;
