import React, { useState, useEffect } from "react";
import "./EmojiPicker.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoriesListing from "./components/CategoriesListing";
import Footer from "./components/Footer";
import { UserCategory, ScrolledSection, EmojiEntry, EmojiItem } from "./types";
import { emojiByCategory, emojiMap } from "./emoji-list";

const categories: UserCategory[] = [
  "recent",
  "people",
  "animals_and_nature",
  "food_and_drink",
  "activity",
  "travel_and_places",
  "objects",
  "flags",
];

const EmojiPicker = () => {
  const [scrolledSections, setScrolledSections] = useState<ScrolledSection[]>(
    []
  );

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
    const sectionIndex = emoji.findIndex(([id]) => category === id);
    const scrolledSection = scrolledSections[sectionIndex];
    if (scrolledSection) {
      scrolledSection.section.current.scrollIntoView();
    }
  };

  useEffect(() => {
    const isScrolledFlags = scrolledSections.map(x => x.isScrolled);
    const lastScrolledIndex = isScrolledFlags.findIndex(
      (isScrolled, i) => isScrolled && !isScrolledFlags[i + 1]
    );
    const lastCategory = categories[lastScrolledIndex];

    if (!lastCategory) {
      return;
    }

    setActiveCategory(lastCategory);
  }, [scrolledSections]);

  const currentScrolled = scrolledSections.find(x => x.isScrolled);
  const shouldHide =
    currentScrolled &&
    currentScrolled.section.current.parentElement.scrollTop > 20;

  return (
    <div className="emoji-picker">
      <Header />
      {!shouldHide && <Search className="emoji-picker__search" />}
      <CategoriesListing
        scrolledSections={scrolledSections}
        setScrolledSections={setScrolledSections}
        emoji={emoji}
        onItemClick={addRecent}
      />
      <Footer
        className="emoji-picker__footer"
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
};

export default EmojiPicker;
