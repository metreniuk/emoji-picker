import React, { useState } from "react"
import classNames from "classnames"

import "./Footer.css"

import * as Svg from "../Svg"

type Category =
  | "recent"
  | "smile"
  | "animal"
  | "food"
  | "sport"
  | "transport"
  | "object"
  | "symbol"

interface NavItemProps {
  category: Category
  icon: Svg.IconType
  isActive: boolean
  onClick(category: Category): any
}

const NavItem = ({ icon: Icon, category, isActive, onClick }: NavItemProps) => (
  <li
    className={classNames("footer__nav-item", {
      "footer__nav-item--active": isActive
    })}
    onClick={() => onClick(category)}
  >
    <Icon className="footer__nav-icon" isFilled={isActive} />
  </li>
)

interface FooterProps {
  className: string
  categories: Array<{ id: Category; icon: Svg.IconType }>
}

const Footer = ({ className, categories }: FooterProps) => {
  const [activeCategory, setActiveCategory] = useState("recent")

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
              onClick={setActiveCategory}
            />
          ))}
        </ul>
      </nav>
    </footer>
  )
}

Footer.defaultProps = {
  categories: [
    {
      id: "recent",
      icon: Svg.Recent
    },
    {
      id: "smile",
      icon: Svg.Smile
    },
    {
      id: "animal",
      icon: Svg.Animal
    },
    {
      id: "food",
      icon: Svg.Food
    },
    {
      id: "sport",
      icon: Svg.Sport
    },
    {
      id: "transport",
      icon: Svg.Transport
    },
    {
      id: "object",
      icon: Svg.Objects
    },
    {
      id: "symbol",
      icon: Svg.Symbols
    }
  ]
}

export default Footer
