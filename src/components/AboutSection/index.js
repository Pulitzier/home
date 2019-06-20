import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faBusinessTime, faHandshake, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const About = (props) => {
	return (
		<section id="about">
      <div className="header">
        <header>О Нас</header>
        <span className="header-underline"></span>
      </div>
      <div className="about-description">
        <p>
          Проектную документацию для Вас разрабатывают грамотные специалисты с опытом работы более 20 лет. Мы имеем аттестат соответствия №0000268-ПР на право осуществления разработки разделов проектной документации для объектов строительства первого-четвёртого классов сложности.
        </p>
      </div>
			<p>
				Имеем право работать с объектами <span className="exclamation">1-4 классов сложности</span>.
			</p>
			<p>
				Наши проекты включают: внутреннее инженерное оборудование,&nbsp;
				внутренние сети и системы (электроснабжения, электрооборудования,&nbsp;
				электроосвещения); наружные сети и системы электроснабжения.
			</p>
		</section>
	)
}

export default About;