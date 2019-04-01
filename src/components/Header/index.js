import React from 'react';
import NavMenu from "../NavMenu";
import './style.css';

const Header = ({ toggleMenu, activeMobileMenu }) => {
 return (
  <header className="brand-header-wrapper">
    <div className="brand-header">
      <a
        href="/"
        target="_self"
        rel="noopener noreferrer"
        className="brand-headline"
      >
        ИП Такушевич
      </a>
      <NavMenu />
      <button
        className={"btn-toggle-control " + (activeMobileMenu ? "toggled-menu" : '')}
        onClick={toggleMenu}
      >
        <div className="hamb-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Меню</p>
      </button>
    </div>
  </header>
)};

export default Header;