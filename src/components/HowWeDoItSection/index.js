import React from 'react';
import './style.scss';

const HowWeDoItSection = () => (
    <section id="how-we-do-it">
      <div className="header">
        <header>Как мы работаем</header>
        <span className="header-underline"></span>
      </div>
      <div className="description-section">
        <div className="description-section-item">
          <div className="description-section-item-number">
            <div className="item-number-wrapper">
              <span className="item-number">1</span>
            </div>
          </div>
          <div className="description-section-item-text">
            <p className="item-title">Встреча с заказчиком</p>
            <p className="item-desc">Наши проектировщики выезжают на объект, проводят обследование и заказчик предоставляет технические условия, акт разграничения
              балансовой принадлежности, техническое задание, дизайн проект при необходимости</p>
          </div>
        </div>
        <div className="description-section-item">
          <div className="description-section-item-number">
            <div className="item-number-wrapper">
              <span className="item-number">2</span>
            </div>
          </div>
          <div className="description-section-item-text">
            <p className="item-title">Разработка проекта специалистами</p>
            <p className="item-desc">Проектировщик разрабатывает проектную документацию в нескольких экземплярах, выполненную в соответствии с действующими
              нормами и правилами. Далее проект проходит согласование в государственных организациях и экспертизу</p>
          </div>
        </div>
        <div className="description-section-item">
          <div className="last description-section-item-number">
            <div className="item-number-wrapper">
              <span className="item-number">3</span>
            </div>
          </div>
          <div className="description-section-item-text">
            <p className="item-title">Передача комплектов чертежей заказчику</p>
            <p className="item-desc">Заказчик получает согласованную проектную документацию. При необходимости, по проведении монтажных работ, осуществляем
              авторский надзор. Если возникнут вопросы по выбору и установке электротехнического и светотехнического
              оборудования, наши проектировщики дадут консультацию</p>
          </div>
        </div>
      </div>
    </section>
);

export default HowWeDoItSection;