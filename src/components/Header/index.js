import React, { Component } from 'react';
import SocialIcons from '../SocialIconsList';
import './style.css';

export default class Header extends Component {
  bindEventsListener() {
    if (window.innerWidth <= 768) {
      let brandHeaderLinks = document.getElementsByClassName("brand-header-link");
      Array.from(brandHeaderLinks).forEach(
        item => item.addEventListener('click', () => this.props.toggleMenu())
      );
    }
  };

  componentDidMount() {
    this.bindEventsListener();
  }

  render() {
    const { toggleMenu, activeMobileMenu } = this.props;
    return (
      <header className={"brand-header-wrapper " + (activeMobileMenu ? "menu-activated" : '')}>
        <div className="brand-header">
            <p className="brand-headline">ИП Такушевич</p>
            <section className="side-menu" >
              <a href="#about" className="brand-header-link">О нас</a>
              <a href="#what-we-do" className="brand-header-link">Чем мы занимаемся?</a>
              <a href="#our-benefits" className="brand-header-link">Наши преимущества</a>
              <a href="#project-structure" className="brand-header-link">Проект</a>
              <a href="#partners" className="brand-header-link">Партнеры</a>
              <a href="#contact-us" className="brand-header-link">Контакты</a>
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
    )
  }
};