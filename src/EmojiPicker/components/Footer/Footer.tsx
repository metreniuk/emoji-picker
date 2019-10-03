import React, { MouseEvent } from "react";
import classNames from "classnames";

import "./Footer.css";

import { UserCategory } from "../../types";
import * as Svg from "../Svg";
import NavItem from "./components/NavItem";

interface Props {
  className?: string;
  categories: UserCategory[];
  activeCategory: UserCategory;
  onCategoryClick(category: UserCategory): void;
}

const iconByCategory: { [category in UserCategory]: Svg.IconType } = {
  recent: Svg.Recent,
  people: Svg.Smile,
  animals_and_nature: Svg.Animal,
  food_and_drink: Svg.Food,
  activity: Svg.Sport,
  travel_and_places: Svg.Transport,
  objects: Svg.Objects,
  flags: Svg.Flags,
};

const Footer = ({
  className,
  categories,
  activeCategory,
  onCategoryClick,
}: Props) => {
  return (
    <footer className={classNames("footer", className)}>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          {categories.map(category => (
            <NavItem
              key={category}
              icon={iconByCategory[category]}
              category={category}
              isActive={category === activeCategory}
              onClick={() => {
                onCategoryClick(category);
              }}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
