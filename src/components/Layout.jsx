import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import HamburgerMenu from './Hamburger';
import '../styles/Layout.css';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleAddFeedbackClick = () => {
    navigate('/add-feedback'); 
  };

  return (
    <>
      <header className="header-container">
        <div className="header-top">
          <div className="branding">
            <h1>My Company</h1>
            <p>Feedback Board</p>
          </div>
          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className="header-bottom">
          <button className="add-feedback" onClick={handleAddFeedbackClick}>
            + Add Feedback
          </button>
        </div>
      </header>

      <HamburgerMenu isOpen={menuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Layout;