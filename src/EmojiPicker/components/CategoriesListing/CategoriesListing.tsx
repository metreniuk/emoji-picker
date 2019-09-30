import React, { useEffect, useRef, useState } from "react";

import "./CategoriesListing.css";

import Section from "./components/Section";

const CategoriesListing = () => {
  const [scrolledSections, setScrolledSections] = useState<[] | boolean[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const sectionsRefs = new Array(8)
    .fill(undefined)
    .map((_, i) => useRef<HTMLElement>(null));

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
      {sectionsRefs.map((ref, i) => (
        <Section
          key={i}
          className="categories-listing__section"
          title="Frequently used"
          ref={ref}
          isScrolled={scrolledSections[i]}
          index={i}
        />
      ))}
    </div>
  );
};

CategoriesListing.defaultProps = {
  categories: [],
};

export default CategoriesListing;
