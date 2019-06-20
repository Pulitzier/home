import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBusinessTime, faCarSide, faHandHoldingUsd, faHandshake} from "@fortawesome/free-solid-svg-icons";

let OurBenefitsSection = (props) => {
	return (
		<section id="portfolio">
      <div className="header">
        <header>Преимущества работы с нами</header>
        <span className="header-underline"></span>
      </div>
      <h3>Закажите проект у нас и мы гарантируем Вам</h3>
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

    </section>
	)
};

export default OurBenefitsSection;