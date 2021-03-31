import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.png';

const HeaderSection = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 150px;
    height: 36px;
    margin-left: 80px;
    margin-top: 32px;
  }

  nav {
    margin-top: 39px;
    margin-right: 80px;
  }

  .link {
    font-size: 16px;
    color: #636363;
    text-decoration: none;
    line-height: 20px;
    margin-left: 25px;
  }
`;

function Header() {
  return (
    <HeaderSection>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav>
        <Link to="/search/javascript" className="link">Search</Link>
        <a href="/#how-it-works" className="link">How it works</a>
        <a href="/#about" className="link">About</a>
      </nav>
    </HeaderSection>
  );
}

export default Header;
