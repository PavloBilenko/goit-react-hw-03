import React from "react";
import s from "./SearchBox.module.css";

function SearchBox({ searchQuery, onSearchChange }) {
  return (
    <div className={s.searchBoxContainer}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        className={s.searchInput}
        placeholder="Search by name"
      />
    </div>
  );
}

export default SearchBox;
