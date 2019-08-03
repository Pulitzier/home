import React, { Component } from 'react';
import akd from '../../static/media/akd-small.jpg';
import be from '../../static/media/be-small.jpg';
import bsb from '../../static/media/bsb-small.jpg';
import gsb from '../../static/media/gsb-small.jpg';
import sek from '../../static/media/sek-small.png';
import alfabank from '../../static/media/alfabank.png';
import kalinka from '../../static/media/kalinka.jpg';
import renault from '../../static/media/renault.jpg';
import './style.css';

const PartnersSection = () => (
  <section id="partners">
    <header>Партнеры</header>
    <p><strong>Наши заказчики - организации всех отраслей экономики и видов деятельности</strong></p>
    <div className="grid-container">
      <div className="grid-item-1">
        <img src={alfabank} alt='Alfa Bank logo'/>
      </div>
      <div className="grid-item-2"  alt='BelExpo logo'>
        <img src={be} />
      </div>
      <div className="grid-item-3">
        <img src={renault}  alt='Renault logo'/>
      </div>
      <div className="grid-item-4">
        <img src={kalinka}  alt='Kalinka logo'/>
      </div>
      <div className="grid-item-5">
        <img src={gsb}  alt='City Security Systems logo'/>
      </div>
      <div className="grid-item-6">
        <img src={sek}  alt='Judgement Expert Collegium logo'/>
      </div>
      <div className="grid-item-7">
        <img src={bsb}  alt='BSB Bank logo'/>
      </div>
      <div className="grid-item-8">
        <img src={akd}  alt='Dzierzhinsky logo'/>
      </div>
    </div>
  </section>
);

export default PartnersSection;