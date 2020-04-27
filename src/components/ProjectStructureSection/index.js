import React, { Component } from 'react';
import './style.scss';
import add from '../../static/media/add.svg';

export default class ProjectStructureSection extends Component {
  bindEventsListener = () => {
    let projectStructureItems = document.getElementsByClassName("project-structure-item");
    Array.from(projectStructureItems).forEach(
      item => item.addEventListener('click', () => {
        item.classList.toggle('clicked');
        let childSubMenu = document.querySelector(`#${item.id} ~ .desc-item`);
        childSubMenu.classList.toggle('open');
      })
    );
  };

  componentDidMount() {
    this.bindEventsListener();
  }

  render () {
    return (
        <section id="project-structure">
          <header>Что же входит в проект?</header>
          <ul className="main-project-structure">
            <li>
              <p id="project-structure-item-1" className="project-structure-item">Основной комплект рабочих чертежей внутреннего электрического освещения <span><img src={add} alt=""/></span></p>
              <div className="desc-item">
                <p>Включает в себя:</p>
                <ul>
                  <li>общие данные по рабочим чертежам</li>
                  <li>планы расположения электрического оборудования и прокладки электрических сетей</li>
                  <li>принципиальные схемы питающей сети</li>
                  <li>схемы (таблицы) подключения комплектных распределительный устройств напряжением до 1000В</li>
                  <li>кабельный журнал для питающей сети (при необходимости)</li>
                </ul>
              </div>
            </li>
            <li>
              <p id="project-structure-item-2" className="project-structure-item">Основной комплект рабочих чертежей наружного электроснабжения <span><img src={add} alt=""/></span></p>
              <div className="desc-item">
                <p>Включает в себя:</p>
                <ul>
                  <li>Общие данные по рабочим чертежам</li>
                  <li>принципиальные схемы питания освещения территории</li>
                  <li>принципиальные схемы управления освещением территории</li>
                  <li>план освещения территории</li>
                  <li>ведомость опор и прожекторных мачт с установленными на них осветительными приборами и электрооборудованием</li>
                  <li>кабельный журнал для сети освещения (при необходимости)</li>
                  <li>чертежи узлов установки осветительных приборов и электрооборудования (при отсутствии типовых)</li>
                  <li>опросный лист (при необходимости)</li>
                  <li>спецификация оборудования, изделий и материалов</li>
                  <li>пояснительную записку</li>
                </ul>
              </div>
            </li>
            <li>
              <p id="project-structure-item-3" className="project-structure-item">Основной комплект рабочих чертежей раздела молниезащиты <span><img src={add} alt=""/></span></p>
              <div className="desc-item">
                <p>Включает в себя:</p>
                <ul>
                  <li>Общие данные по рабочим чертежам</li>
                  <li>чертеж размещения молниезащитных устройств (план и разрез)</li>
                  <li>чертежи размещения наружных заземляющих устройств на плане</li>
                </ul>
              </div>
            </li>
            <li>
              <p id="project-structure-item-4" className="project-structure-item">Основной комплект рабочих чертежей силового электрооборудования <span><img src={add} alt=""/></span></p>
              <div className="desc-item">
                <p>Включает в себя:</p>
                <ul>
                  <li>Общие данные по рабочим чертежам</li>
                  <li>схемы электрические принципиальные комплектных трансформаторных подстанций (КТГ1), питающей и распределительной сетей</li>
                  <li>принципиальные схемы управления электроприводами</li>
                  <li>схемы (таблицы) подключения</li>
                  <li>планы расположения электрооборудования и прокладки электрических сетей</li>
                  <li>кабельный журнал</li>
                  <li>трубозаготовительную ведомость</li>
                  <li>ведомость заполнения труб кабелями и проводами</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
    );
  }
};