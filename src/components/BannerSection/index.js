import React from 'react';
import { Button } from "react-bootstrap";
import "./style.css";

function scrollToView() {
	const firstSection = document.getElementById("about");
	firstSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

let BannerSection = () => (
  <div className="banner-wrapper">
    <div className="banner">
      <h1>Проектирование систем электроснабжения</h1>
      <h2>Грамотно выполненный проект – прочный фундамент для работы надежной системы электрификации объекта</h2>
    </div>
    <a className="order-project" href="#contact-us">Заказать проект</a>
    <Button className="click-me-down" onClick={scrollToView}>
      <svg className="t-cover__arrow-svg" x="0px" y="0px" viewBox="0 0 38.417 18.592">
        <g>
          <path
            d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path>
        </g>
      </svg>
    </Button>
  </div>
);

export default BannerSection;