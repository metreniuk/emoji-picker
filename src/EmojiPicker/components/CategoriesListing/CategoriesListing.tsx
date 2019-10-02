import React, { useEffect, useRef, useState, createRef } from "react";

import "./CategoriesListing.css";

import { ScrolledSection, EmojiEntry } from "../../types";
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
  setScrolledSections
) => {
  useEffect(() => {
    const { current } = container;
    const handleScroll = () => {
      const tops = items.map(x => x.current.offsetTop);

      const newScrolledSections = tops.map((top: number, i: number) => ({
        section: items[i],
        isScrolled: Boolean(
          container.current && container.current.scrollTop > top
        ),
      }));

      setScrolledSections(newScrolledSections);
    };

    handleScroll();

    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [items, container]);
};

interface Props {
  scrolledSections: ScrolledSection[];
  setScrolledSections(scrolledSections: ScrolledSection[]): void;
  emoji: EmojiEntry[];
}

const CategoriesListing = ({
  scrolledSections,
  setScrolledSections,
  emoji,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const refs = useRef(emoji.map(() => createRef<HTMLElement>()));
  const sectionsRefs = refs.current;

  useSetScrolledSections(ref, sectionsRefs, setScrolledSections);
  const isScrolledValues = scrolledSections.map(x => x.isScrolled);

  return (
    <div className="categories-listing" ref={ref}>
      {emoji.map(([id, items], i) => (
        <Section
          key={id}
          className="categories-listing__section"
          title={titlesMap[id]}
          ref={sectionsRefs[i]}
          isScrolled={isScrolledValues[i]}
          index={i}
          items={items}
        />
      ))}
    </div>
  );
};

export default CategoriesListing;
