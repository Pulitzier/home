import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faBusinessTime, faHandshake, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import image1 from '../../static/media/46570371.jpg';
import image2 from '../../static/media/61609426.jpg';
import image3 from '../../static/media/108058434.jpg';

const WhatWeDo = (props) => (
  <section id="what-we-do">
    <div className="header">
      <header>Чем мы зaнимаемся?</header>
      <span className="header-underline"></span>
    </div>
    <div className="about-description">
      <p>
        Мы разрабатываем проектную документацию следующих разделов:
      </p>
    </div>
    <div className="what-we-do-items">
      <div className="what-we-do-item">
        <div className="iamge-container">
          <img src={image1}/>
        </div>
        <p>Сети и трансформаторные подстанции 10/0,4кВ, электроснабжение стройплощадки</p>
      </div>
      <div className="what-we-do-item">
        <div className="iamge-container">
          <img src={image2}/>
        </div>
        <p>Активная и пассивная молниезащита, глубинное заземление</p>
      </div>
      <div className="what-we-do-item">
        <div className="iamge-container">
          <img src={image3}/>
        </div>
        <p>Наружное и внутреннее освещение, силовое электрооборудование объектов</p>
      </div>
    </div>
    <p>
      Наши проекты включают: внутреннее инженерное оборудование,&nbsp;
      внутренние сети и системы (электроснабжения, электрооборудования,&nbsp;
      электроосвещения); наружные сети и системы электроснабжения.
    </p>
  </section>
);

export default WhatWeDo;