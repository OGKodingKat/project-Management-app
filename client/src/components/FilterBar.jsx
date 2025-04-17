import React from 'react';
import '../styles/FilterBar.css'; // optional, or reuse existing filter-btn styles

const filters = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

const FilterBar = ({ activeFilter, onFilterChange, className = '' }) => {
  return (
    <div className={`filter-bar ${className}`}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
