import React, { forwardRef } from "react";
import classNames from "classnames";
import "./Section.css";

interface CategoryItem {
  id: string;
  value: string;
}

interface Props {
  className: string;
  title: string;
  index: number;
  isScrolled: boolean;
  items?: CategoryItem[];
}

const defaultItems = new Array(10).fill(undefined);

// TODO Fix not centered emoji
// TODO The padding when scrollbar is enabled
const Section = forwardRef<HTMLElement, Props>(
  ({ className, title, index, isScrolled, items = defaultItems }, ref) => (
    <section
      className={classNames(
        "section",
        {
          "section--scrolled": isScrolled,
        },
        className
      )}
      ref={ref}
    >
      <h2 className="section__title" data-index={index}>
        {title}
      </h2>
      <div className="section__icons-list">
        {items.map(({ id, value }) => (
          <div className="section__icon-wrapper" key={id}>
            {value}
          </div>
        ))}
      </div>
    </section>
  )
);

export default Section;
