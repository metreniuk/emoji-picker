import React, { forwardRef } from "react";
import classNames from "classnames";
import "./Section.css";

interface Props {
  className: string;
  title: string;
  index: number;
  isScrolled: boolean;
  items?: Array<{}>;
}

type Ref = HTMLElement;

const defaultItems = new Array(10).fill(undefined);

const Section = forwardRef<Ref, Props>(
  ({ className, title, index, isScrolled, items = defaultItems }, ref) => {
    return (
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
          {items.map((_, i) => (
            <div className="icon" key={i} />
          ))}
        </div>
      </section>
    );
  }
);

export default Section;
