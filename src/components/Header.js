// Header.js
import React from 'react';
import './Header.css';
import myImg from './avt.png';
//<img src= {.} alt="User Avatar" className="avatar" />
function Header({ searchQuery, handleSearchChange }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="user-info">
        <img src={myImg} alt="" className="avatar" />
          <span className="welcome-message">Hello User!</span>
        </div>
        <div className="search-bar">
        <input
            type="text"
            placeholder="Search tasks"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
