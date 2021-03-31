import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <Link to="/search">Search</Link>
        <a href="/#how-it-works">How it works</a>
        <a href="/#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
