import React from 'react';

let NavMenu = (props) => {
	return (
		<section
			className="side-menu"
		>
			<a href="/">Главная</a>
			<a href="#about">О Нас</a>
			<a href="#services">Услуги</a>
			<a href="#clients">Наши Заказчики</a>
			<a href="#contact-us">Контакты</a>
		</section>
	)
};

export default NavMenu;