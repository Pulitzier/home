import React from "react";
import './styles.css';
import car from '../../static/media/car.svg';
import calendar from '../../static/media/calendar.svg';
import handshake from '../../static/media/handshake.svg';
import list from '../../static/media/list.svg';
import money from '../../static/media/money.svg';
import stamp from '../../static/media/stamp.svg';

let OurBenefitsSection = (props) => {
	return (
		<section id="our-benefits">
      <header>Преимущества работы с нами</header>
      <h3>Закажите проект у нас и мы гарантируем Вам</h3>
      <div className="our-benefits-row">
        <div className="our-benefits-item">
          <img alt="Выезд на объект" src={car} />
          <p className="about-item">Выезд на объект</p>
        </div>
        <div className="our-benefits-item">
          <img alt="Соблюдение сроков проектирования" src={calendar} />
          <p className="about-item">Соблюдение сроков проектирования</p>
        </div>
        <div className="our-benefits-item">
          <img alt="Согласование в компетентных организациях" src={stamp} />
          <p className="about-item">Согласование в компетентных организациях</p>
        </div>
      </div>
      <div className="our-benefits-row">
        <div className="our-benefits-item">
          <img alt="Выполнение договорных обязательств" src={handshake} />
          <p className="about-item">Выполнение договорных обязательств</p>
        </div>
        <div className="our-benefits-item">
          <img alt="Безналичный расчет" src={money} />
          <p className="about-item">Безналичный расчет</p>
        </div>
        <div className="our-benefits-item">
          <img alt="Выполнение авторского надзора" src={list} />
          <p className="about-item">Выполнение авторского надзора</p>
        </div>
      </div>
    </section>
	)
};

export default OurBenefitsSection;