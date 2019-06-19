import React from 'react';
import './style.css';

const NavMenu = (props) => {
	return (
		<section className="side-menu" >
      <a href="#about">О Нас</a>
      <a href="#about">Чем мы занимаемся?</a>
      <a href="#services">Наши преимущества</a>
      <a href="#clients">Партнеры</a>
      <a href="#contact-us">Контакты</a>
		</section>
	)
};

export default NavMenu;