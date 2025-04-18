import React from 'react';
import styles from './SearchBar.module.css';
import { SearchIcon } from './SVGIcons';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.iconSearch} />
      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search code groups"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar; 