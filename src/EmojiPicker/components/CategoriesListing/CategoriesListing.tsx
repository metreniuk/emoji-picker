import React, { useEffect, useRef, createRef } from "react";
import classNames from "classnames";

import "./CategoriesListing.css";

import { ScrolledSection, EmojiEntry, EmojiItem } from "../../types";
import Section from "./components/Section";

const titlesMap = {
  recent: "Frequently used",
  people: "Smileys & People",
  animals_and_nature: "Animals & Nature",
  food_and_drink: "Food & Drink",
  activity: "Activity",
  travel_and_places: "Travel & Places",
  objects: "Objects",
  flags: "Flags",
};

interface Props {
  scrolledSections: ScrolledSection[];
  setScrolledSections(scrolledSections: ScrolledSection[]): void;
  emoji: EmojiEntry[];
  onItemClick(item: EmojiItem): void;
}

const CategoriesListing = ({
  scrolledSections,
  setScrolledSections,
  emoji,
  onItemClick,
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
          className={classNames("categories-listing__section", {
            "categories-listing__section--empty": items.length === 0,
          })}
          title={titlesMap[id]}
          ref={sectionsRefs[i]}
          isScrolled={isScrolledValues[i]}
          index={i}
          items={items}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  );
};

function useSetScrolledSections(
  container: { current: HTMLDivElement },
  items: { current: HTMLElement }[],
  setScrolledSections: (scrolledSections: ScrolledSection[]) => void
) {
  useEffect(() => {
    const { current } = container;
    const handleScroll = () => {
      const tops = items.map(x => x.current.offsetTop);

      const newScrolledSections = tops.map((top: number, i: number) => ({
        section: items[i],
        isScrolled: Boolean(
          container.current && container.current.scrollTop > top - 10
        ),
      }));

      setScrolledSections(newScrolledSections);
    };

    handleScroll();

    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [items, container, setScrolledSections]);
}

export default CategoriesListing;
