import React from 'react';
import './style.css';

const NavMenu = () => {
	return (
		<section className="side-menu" >
      <a href="#about">О Нас</a>
      <a href="#what-we-do">Чем мы занимаемся?</a>
      <a href="#portfolio">Наши преимущества</a>
      <a href="#project-structure">Проект</a>
      <a href="#partners">Партнеры</a>
      <a href="#contact-us">Контакты</a>
		</section>
	)
};

export default NavMenu;