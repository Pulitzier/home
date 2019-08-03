import React from "react";
import './style.css';
import self_client from '../../static/media/219388.jpg';

let ServicesSection = (props) => {
	return (
		<section id="services">
      <div>
        <img className="self-confident-client-img" alt="We do not need the project" src={self_client}/>
        <div className="self-confident-client-sub-section">
          <h1>"Мне проект не нужен!"</h1>
          <p>
            Проектирование является стадией, на которой разрабатываются основные проектно-технические решения, формируется технический облик системы электрификации объекта.
            Эффективное проектирование системы электроснабжения невозможно без знания основных принципов их построения и функционирования.
            Очень важно правильно выбрать техническое оборудование индивидуально, исходя из специфики проектируемого или защищаемого объекта.
            Поэтому роль проектировщика в обеспечении электробезопасности и корректного функционирования объектов весьма высока.
          </p>
        </div>
      </div>
		</section>
	)
};

export default ServicesSection;