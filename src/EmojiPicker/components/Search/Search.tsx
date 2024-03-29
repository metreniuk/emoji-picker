import React, { useState, ChangeEvent } from "react";
import classNames from "classnames";
import "./Search.css";

import * as Svg from "../Svg";

const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState);

  return {
    value,
    setValue: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    reset: () => setValue(initialState),
  };
};

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
  const { value, setValue, reset } = useInput("");

  const classes = classNames("search", className);

  return (
    <div className={classes}>
      <div className="search__content">
        <Svg.Search className="search__search-icon" />
        <input
          className="search__input"
          placeholder="Search"
          value={value}
          onChange={setValue}
        />
        {Boolean(value) && (
          <button className="search__close-btn" onClick={reset}>
            <Svg.Close className="search__close-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
