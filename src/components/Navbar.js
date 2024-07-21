import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar styling

const Navbar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect using window.location instead of useHistory
    window.location.href = `/search?query=${query}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">MovieDb</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/top-rated" className="nav-link">Top Rated</Link>
        </li>
        <li className="nav-item">
          <Link to="/upcoming" className="nav-link">Upcoming</Link>
        </li>
      </ul>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
