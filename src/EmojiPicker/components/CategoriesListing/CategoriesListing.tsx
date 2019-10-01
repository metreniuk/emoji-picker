import React, { useEffect, useRef, useState, createRef } from "react";

import "./CategoriesListing.css";

import emojiList from "../../../emoji-list";
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

const useScrolledSections = (
  container: { current: HTMLDivElement },
  items: { current: HTMLElement }[]
) => {
  const [scrolledSections, setScrolledSections] = useState<[] | boolean[]>([]);

  useEffect(() => {
    const { current } = container;
    const handleScroll = () => {
      const tops = items.map(x => x.current.offsetTop);

      const newScrolledSections = tops.map((top: number, i: number) =>
        Boolean(container.current && container.current.scrollTop >= top)
      );

      setScrolledSections(newScrolledSections);
    };

    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [items, container]);

  return scrolledSections;
};

const CategoriesListing = ({ emoji = emojiList }) => {
  const ref = useRef<HTMLDivElement>(null);

  const categories = Object.entries(emoji);

  const refs = useRef(categories.map(() => createRef<HTMLElement>()));
  const sectionsRefs = refs.current;

  const scrolledSections = useScrolledSections(ref, sectionsRefs);

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

CategoriesListing.defaultProps = {
  categories: [],
};

export default CategoriesListing;
