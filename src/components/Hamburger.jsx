import '../styles/Hamburger.css';
import { useState } from 'react';

const filterOptions = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

const HamburgerMenu = ({ isOpen, onClose }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <aside className={`hamburger-menu slide-${isOpen ? 'in' : 'out'}`}>
      {filterOptions.map((option) => (
        <button
          key={option}
          className={`filter-btn ${activeFilter === option ? 'active' : ''}`}
          onClick={() => setActiveFilter(option)}
        >
          {option}
        </button>
      ))}
    </aside>
  );
};

export default HamburgerMenu;