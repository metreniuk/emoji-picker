import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import "./Section.css";

const Section = ({ className, title, items, index }) => {
  return (
    <section className={classNames("section", className)}>
      <h2 className="section__title" data-index={index}>
        {title}
      </h2>
      <div className="section__icons-list">
        {items.map((_, i) => (
          <div className="icon" key={i} />
        ))}
      </div>
    </section>
  );
};

Section.defaultProps = {
  items: new Array(10).fill(undefined),
};

export default Section;
