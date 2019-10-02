import React, { MouseEvent } from "react";
import classNames from "classnames";

import "./Footer.css";

import { UserCategory } from "../../types";
import { IconType } from "../Svg";

interface NavItemProps {
  category: UserCategory;
  icon: IconType;
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
  categories: { id: UserCategory; icon: IconType }[];
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
              onClick={() => {
                onCategoryClick(id);
              }}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
