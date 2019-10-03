import React, { forwardRef } from "react";
import classNames from "classnames";

import "./Section.css";

import { EmojiItem } from "../../../../types";

interface Props {
  className: string;
  title: string;
  index: number;
  isScrolled: boolean;
  onItemClick(item: EmojiItem): void;
  items?: EmojiItem[];
}

const Section = forwardRef<HTMLElement, Props>(
  ({ className, title, isScrolled, onItemClick, items }, ref) => (
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
      <h2 className="section__title">{title}</h2>
      <div className="section__icons-list">
        {items.map(({ id, value }) => (
          <div
            className="section__icon-wrapper"
            key={id}
            onClick={() => {
              onItemClick({ id, value });
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </section>
  )
);

export default Section;
