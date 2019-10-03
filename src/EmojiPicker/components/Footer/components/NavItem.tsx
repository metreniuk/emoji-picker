import React from "react";
import classNames from "classnames";

import "./NavItem.css";

import { UserCategory } from "../../../types";
import { IconType } from "../../Svg";

interface NavItemProps {
  category: UserCategory;
  icon: IconType;
  isActive: boolean;
  onClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>): any;
}

const NavItem = ({ icon: Icon, isActive, onClick }: NavItemProps) => (
  <li
    className={classNames("nav-item", {
      "nav-item--active": isActive,
    })}
    onClick={onClick}
  >
    <Icon className="nav-item__icon" isFilled={isActive} />
  </li>
);

export default NavItem;
