import React, { useEffect, useRef, useState, createRef } from "react";

import "./CategoriesListing.css";

import emojiList, { EmojiMap } from "../../../emoji-list";
import Section from "./components/Section";

const titlesMap = {
  people: "Smileys & People",
  animals_and_nature: "Animals & Nature",
  food_and_drink: "Food & Drink",
  activity: "Activity",
  travel_and_places: "Travel & Places",
  objects: "Objects",
  flags: "Flags",
};

const useSetScrolledSections = (
  container: { current: HTMLDivElement },
  items: { current: HTMLElement }[],
  setScrolledSections: (scrollSections: boolean[]) => void
) => {
  useEffect(() => {
    const { current } = container;
    const handleScroll = () => {
      const tops = items.map(x => x.current.offsetTop);

      const newScrolledSections = tops.map((top: number, i: number) =>
        Boolean(container.current && container.current.scrollTop > top)
      );

      setScrolledSections(newScrolledSections);
    };

    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [items, container]);
};

interface Props {
  scrolledSections: boolean[];
  setScrolledSections(scrolledSections: boolean[]): void;
  emoji?: EmojiMap;
}

const CategoriesListing = ({
  scrolledSections,
  setScrolledSections,
  emoji = emojiList,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const categories = Object.entries(emoji);

  const refs = useRef(categories.map(() => createRef<HTMLElement>()));
  const sectionsRefs = refs.current;

  useSetScrolledSections(ref, sectionsRefs, setScrolledSections);

  return (
    <div className="categories-listing" ref={ref}>
      {categories.map(([id, items], i) => (
        <Section
          key={id}
          className="categories-listing__section"
          title={titlesMap[id]}
          ref={sectionsRefs[i]}
          isScrolled={scrolledSections[i]}
          index={i}
          items={items}
        />
      ))}
    </div>
  );
};

export default CategoriesListing;
