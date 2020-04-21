import React from 'react';
import SocialIcons from '../SocialIconsList';
import './style.css';

const Header = ({ toggleMenu, activeMobileMenu }) => {
 return (
  <header className={"brand-header-wrapper " + (activeMobileMenu ? "menu-activated" : '')}>
    <div className="brand-header">
        <p className="brand-headline">ИП Такушевич</p>
        <section className="side-menu" >
            <a href="#about">О нас</a>
            <a href="#what-we-do">Чем мы занимаемся?</a>
            <a href="#our-benefits">Наши преимущества</a>
            <a href="#project-structure">Проект</a>
            <a href="#partners">Партнеры</a>
            <a href="#contact-us">Контакты</a>
            <SocialIcons dimensions={{ width: 24, height: 24 }} />
       </section>
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
    </div>
  </header>
)};

export default Header;