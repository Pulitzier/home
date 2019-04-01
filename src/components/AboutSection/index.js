import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faBusinessTime, faHandshake, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const About = (props) => {
	return (
		<section id="about">
			<header>О Нас</header>
			<p>
				Опыт работы около <span className="exclamation">20 лет</span> и около <span className="exclamation">500</span> выполненных проектов
			</p>
			<p className="about-item">
				<span>
						<FontAwesomeIcon icon={faCarSide} />
				</span>
				Выезд на объект
			</p>
			<p className="about-item">
				<span>
					<FontAwesomeIcon icon={faBusinessTime} />
				</span>
				Соблюдение сроков
			</p>
			<p className="about-item">
				<span>
					<FontAwesomeIcon icon={faHandshake} />
				</span>
				Согласовнаие проектов
			</p>
			<p className="about-item">
				<span>
					<FontAwesomeIcon icon={faHandHoldingUsd} />
				</span>
				Безналичный расчет
			</p>
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