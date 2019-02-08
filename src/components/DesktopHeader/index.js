import React from 'react';

let DesktopHeader = ({ toggleMenu, activeMobileMenu }) => (
  <header className="brand-header">
    <a
      className="brand-headline" href="/"
      target="_self" rel="noopener noreferrer"
    >
      ИП Такушевич
    </a>
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
    </button>
  </header>
);

export default DesktopHeader;
