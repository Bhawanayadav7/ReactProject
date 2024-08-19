import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png';

export default function Section1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light position-absolute bg-transparent">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <div className="logo d-flex">
            <img className="my-2" src={icon} alt="logo" />
            <h1 className="mx-3">Build Better</h1>
          </div>
        </a>
        <button
          className="navbar-toggler iconx"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse expand-lg" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Section2">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Section3">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Section5">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Section8">Contact</Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <Link className="nav-link" to="/LoginSignup" onClick={handleLogout}>Logout</Link>
              ) : (
                <Link className="nav-link" to="/LoginSignup">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
