import React from 'react';
import NavMenu from "../NavMenu";
import './style.css';

const Header = ({ toggleMenu, activeMobileMenu }) => {
 return (
  <header className="brand-header-wrapper">
    <div className="brand-header">
      <p className="brand-headline">ИП Такушевич</p>
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
1      </button>
    </div>
  </header>
)};

export default Header;