import React, { Component } from 'react';

export default class DesktopHeader extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const { toggleMenu, activeMobileMenu, scrollStart } = this.props;
  
  
    return (
      <header className={"brand-header-wrapper " + (scrollStart ? 'scrolled' : '')}>
        <div className="brand-header">
          <a
            href="/"
            target="_self"
            rel="noopener noreferrer"
            className="brand-headline"
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
            <p>Меню</p>
          </button>
        </div>
      </header>
    );
  }
};