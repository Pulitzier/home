import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faBusinessTime, faHandshake, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const About = (props) => {
	return (
		<section id="about">
      <header>О Нас</header>
      <p>
        Проектную документацию для Вас разрабатывают грамотные специалисты с опытом работы более 20 лет.
        Мы имеем аттестат соответствия №0000268-ПР на право осуществления разработки разделов проектной документации
        для объектов строительства первого-четвёртого классов сложности. Имеем право работать с объектами первого-четвертого классов сложности.
      </p>
		</section>
	)
}

export default About;