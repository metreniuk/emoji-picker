import React from "react";
import classNames from "classnames";

import "./Header.css";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => (
  <header className={classNames("header", className)}>
    <h1 className="header__heading">Emoji</h1>
  </header>
);

export default Header;
