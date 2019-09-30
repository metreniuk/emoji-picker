import React, { useEffect, useRef, useState } from "react";

import "./CategoriesListing.css";

import Section from "./components/Section";

type Category =
  | "recent"
  | "smile"
  | "animal"
  | "food"
  | "sport"
  | "transport"
  | "object"
  | "symbol";

const CategoriesListing = () => {
  const ref = useRef<any>(null);
  let sectionsRefs = useRef<any>(null);

  useEffect(() => {
    sectionsRefs.current = [].slice.call(
      document.getElementsByClassName("section")
    );

    const handleScroll = () => {
      const tops = sectionsRefs.current.map((x: any) => x.offsetTop);

      tops.forEach((top: any, i: number) => {
        if (ref.current.scrollTop >= top) {
          sectionsRefs.current[i].classList.add("section--scrolled");
        } else {
          sectionsRefs.current[i].classList.remove("section--scrolled");
        }
      });
      console.log(ref.current.scrollTop, tops);
    };

    ref.current.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="categories-listing" ref={ref}>
      <Section
        className="categories-listing__section"
        title="Frequently used"
        index={0}
      />
      <Section
        className="categories-listing__section"
        title="Smileys & people"
        index={1}
      />
      <Section
        className="categories-listing__section"
        title="Smileys & people"
        index={2}
      />
      <Section
        className="categories-listing__section"
        title="Smileys & people"
        index={3}
      />
      <Section
        className="categories-listing__section"
        title="Smileys & people"
        index={4}
      />
      <Section
        className="categories-listing__section"
        title="Smileys & people"
        index={5}
      />
      <Section
        className="categories-listing__section"
        title="Smileys & people"
        index={6}
      />
    </div>
  );
};

CategoriesListing.defaultProps = {
  categories: [],
};

export default CategoriesListing;
