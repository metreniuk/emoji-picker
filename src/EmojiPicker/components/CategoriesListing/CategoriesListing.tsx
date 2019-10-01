import React, { useEffect, useRef, useState } from "react";

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

const CategoriesListing = ({ emoji = emojiList }) => {
  const [scrolledSections, setScrolledSections] = useState<[] | boolean[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const categories = Object.entries(emoji);

  const sectionsRefs = categories.map(() => useRef<HTMLElement>(null));

  useEffect(() => {
    const handleScroll = () => {
      const tops = sectionsRefs.map((x: any) => x.current.offsetTop);

      const newScrolledSections = tops.map((top: number, i: number) =>
        Boolean(ref.current && ref.current.scrollTop >= top)
      );

      setScrolledSections(newScrolledSections);
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
