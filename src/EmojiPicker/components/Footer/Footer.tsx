import React, { MouseEvent } from "react";
import classNames from "classnames";

import "./Footer.css";

import { UserCategory } from "../../types";
import * as Svg from "../Svg";

interface NavItemProps {
  category: UserCategory;
  icon: Svg.IconType;
  isActive: boolean;
  onClick(e: MouseEvent): any;
}

const NavItem = ({ icon: Icon, isActive, onClick }: NavItemProps) => (
  <li
    className={classNames("footer__nav-item", {
      "footer__nav-item--active": isActive,
    })}
    onClick={onClick}
  >
    <Icon className="footer__nav-icon" isFilled={isActive} />
  </li>
);

interface FooterProps {
  className: string;
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
}: FooterProps) => {
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
