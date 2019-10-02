import React from "react";
import classNames from "classnames";

import "./Footer.css";

import { UserCategory } from "../../types";
import * as Svg from "../Svg";

interface NavItemProps {
  category: UserCategory;
  icon: Svg.IconType;
  isActive: boolean;
  onClick(category: UserCategory): any;
}

const NavItem = ({ icon: Icon, category, isActive, onClick }: NavItemProps) => (
  <li
    className={classNames("footer__nav-item", {
      "footer__nav-item--active": isActive,
    })}
    onClick={() => onClick(category)}
  >
    <Icon className="footer__nav-icon" isFilled={isActive} />
  </li>
);

interface FooterProps {
  className: string;
  categories: { id: UserCategory; icon: Svg.IconType }[];
  activeCategory: UserCategory;
  onCategoryClick(category: UserCategory): void;
}

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
          {categories.map(({ icon, id }) => (
            <NavItem
              key={id}
              icon={icon}
              category={id}
              isActive={id === activeCategory}
              onClick={onCategoryClick}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
};

Footer.defaultProps = {
  categories: [
    {
      id: "recent",
      icon: Svg.Recent,
    },
    {
      id: "people",
      icon: Svg.Smile,
    },
    {
      id: "animals_and_nature",
      icon: Svg.Animal,
    },
    {
      id: "food_and_drink",
      icon: Svg.Food,
    },
    {
      id: "activity",
      icon: Svg.Sport,
    },
    {
      id: "travel_and_places",
      icon: Svg.Transport,
    },
    {
      id: "objects",
      icon: Svg.Objects,
    },
    {
      id: "flags",
      icon: Svg.Flags,
    },
  ],
};

export default Footer;
