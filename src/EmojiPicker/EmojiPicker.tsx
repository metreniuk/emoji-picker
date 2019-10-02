import React, { useState } from "react";
import "./EmojiPicker.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoriesListing from "./components/CategoriesListing";
import Footer from "./components/Footer";
import { UserCategory, ScrolledSection, EmojiEntry } from "./types";
import emojiByCategory, { EmojiItem, emojiMap } from "../emoji-list";

// TODO change active category depending on scroll

const EmojiPicker = () => {
  const [scrolledSections, setScrolledSections] = useState<
    ScrolledSection[] | []
  >([]);

  const [usageCountMap, setUsageCountMap] = useState<{
    [category: string]: number;
  }>({});
  const addRecent = emojiItem => {
    const usageCount = usageCountMap[emojiItem.id];
    if (usageCount) {
      setUsageCountMap({ ...usageCountMap, [emojiItem.id]: usageCount + 1 });
    } else {
      setUsageCountMap({ ...usageCountMap, [emojiItem.id]: 1 });
    }
  };

  const recentEmoji: EmojiItem[] = Object.entries(usageCountMap)
    .sort(([_, x], [__, y]) => y - x)
    .map(([id]) => id)
    .map(id => ({ id, value: emojiMap[id] }));

  const [activeCategory, setActiveCategory] = useState<UserCategory>("recent");

  const emojiEntries = Object.entries(emojiByCategory) as EmojiEntry[];
  const emoji: EmojiEntry[] = [["recent", recentEmoji], ...emojiEntries];
  const handleCategoryClick = (category: UserCategory) => {
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
        onItemClick={addRecent}
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
