import React, { useState, useEffect } from "react";
import "./EmojiPicker.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoriesListing from "./components/CategoriesListing";
import Footer from "./components/Footer";
import { UserCategory, ScrolledSection, EmojiEntry } from "./types";
import emojiByCategory, { EmojiItem, emojiMap } from "../emoji-list";
import * as Svg from "./components/Svg";

const categories: { id: UserCategory; icon: Svg.IconType }[] = [
  {
    id: "recent",
    icon: Svg.Recent,
  },
  {
    id: "people",
    icon: Svg.Smile,
  },
  {
    id: "animals_and_nature",
    icon: Svg.Animal,
  },
  {
    id: "food_and_drink",
    icon: Svg.Food,
  },
  {
    id: "activity",
    icon: Svg.Sport,
  },
  {
    id: "travel_and_places",
    icon: Svg.Transport,
  },
  {
    id: "objects",
    icon: Svg.Objects,
  },
  {
    id: "flags",
    icon: Svg.Flags,
  },
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
    setActiveCategory(category);
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

    if (lastScrolledIndex !== -1) {
      setActiveCategory(categories[lastScrolledIndex].id);
    }
  }, [scrolledSections]);

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
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
};

export default EmojiPicker;
