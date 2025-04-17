import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from './Hamburger';
import FilterBar from './FilterBar'; // Import your FilterBar
import '../styles/Layout.css';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleAddFeedbackClick = () => {
    navigate('/add-feedback');
  };

  return (
    <>
      {/* Header */}
      <header className="header-container">
        <div className="header-top">
          <div className="branding">
            <h1>My Company</h1>
            <p>Feedback Board</p>
          </div>
          {/* Hamburger Button */}
          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile FilterBar in Hamburger */}
        {menuOpen && (
          <div className="hamburger-menu">
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              className="mobile-filters"
            />
            <button className="add-feedback" onClick={handleAddFeedbackClick}>
              + Add Feedback
            </button>
          </div>
        )}

        {/* Desktop/Tablet FilterBar */}
        {!menuOpen && (
          <div className="header-bottom">
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              className="desktop-filters"
            />
            <button className="add-feedback" onClick={handleAddFeedbackClick}>
              + Add Feedback
            </button>
          </div>
        )}
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={menuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Layout;
