import React, { useState, useEffect } from "react";
import "./EmojiPicker.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoriesListing from "./components/CategoriesListing";
import Footer from "./components/Footer";
import {
  UserCategory,
  ScrolledSection,
  EmojiEntry,
  EmojiItem,
  UsageCountMap,
} from "./types";
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
const emojiEntries = Object.entries(emojiByCategory) as EmojiEntry[];

const EmojiPicker = () => {
  const [activeCategory, setActiveCategory] = useState<UserCategory>(
    categories[0]
  );
  const [scrolledSections, setScrolledSections] = useState<ScrolledSection[]>(
    []
  );
  const { usageCountMap, setEmojiCount } = useUsageCountMap();

  const allEmojiEntries: EmojiEntry[] = [
    ["recent", getRecentEmoji(usageCountMap)],
    ...emojiEntries,
  ];

  useActiveCategoryFromScroll(scrolledSections, setActiveCategory);

  const isSearchVisible = !isSearchHidden(scrolledSections);

  return (
    <div className="emoji-picker">
      <Header />
      {isSearchVisible && <Search className="emoji-picker__search" />}
      <CategoriesListing
        scrolledSections={scrolledSections}
        setScrolledSections={setScrolledSections}
        emoji={allEmojiEntries}
        onItemClick={setEmojiCount}
      />
      <Footer
        className="emoji-picker__footer"
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={scrollToCategory(allEmojiEntries, scrolledSections)}
      />
    </div>
  );
};

function useUsageCountMap() {
  const [usageCountMap, setUsageCountMap] = useState<UsageCountMap>({});

  const setEmojiCount = (emojiItem: EmojiItem) => {
    const usageCount = usageCountMap[emojiItem.id];
    if (usageCount) {
      setUsageCountMap({ ...usageCountMap, [emojiItem.id]: usageCount + 1 });
    } else {
      setUsageCountMap({ ...usageCountMap, [emojiItem.id]: 1 });
    }
  };

  return { usageCountMap, setEmojiCount };
}

function getRecentEmoji(usageCountMap: UsageCountMap): EmojiItem[] {
  return Object.entries(usageCountMap)
    .sort(([_, x], [__, y]) => y - x)
    .map(([id]) => id)
    .map(id => ({ id, value: emojiMap[id] }));
}

function useActiveCategoryFromScroll(
  scrolledSections: ScrolledSection[],
  setActiveCategory: (category: UserCategory) => void
) {
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
  }, [scrolledSections, setActiveCategory]);
}

function isSearchHidden(scrolledSections: ScrolledSection[]) {
  const currentScrolled = scrolledSections.find(x => x.isScrolled);

  return (
    currentScrolled &&
    currentScrolled.section.current.parentElement.scrollTop > 20
  );
}

function scrollToCategory(
  emojiEntries: EmojiEntry[],
  scrolledSections: ScrolledSection[]
) {
  return (category: UserCategory) => {
    const sectionIndex = emojiEntries.findIndex(([id]) => category === id);
    const scrolledSection = scrolledSections[sectionIndex];
    if (scrolledSection) {
      scrolledSection.section.current.scrollIntoView();
    }
  };
}

export default EmojiPicker;
