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
    <div className="header">
      <header>Партнеры</header>
    </div>
    <p>Наши заказчики - организации всех отраслей экономики и видов деятельности</p>
    <div className="grid-container">
      <div className="grid-item-1">
        <img src={alfabank} />
      </div>
      <div className="grid-item-2">
        <img src={be} />
      </div>
      <div className="grid-item-3">
        <img src={renault} />
      </div>
      <div className="grid-item-4">
        <img src={kalinka} />
      </div>
      <div className="grid-item-5">
        <img src={gsb} />
      </div>
      <div className="grid-item-6">
        <img src={sek} />
      </div>
      <div className="grid-item-7">
        <img src={bsb} />
      </div>
      <div className="grid-item-8">
        <img src={akd} />
      </div>
    </div>
  </section>
);

export default PartnersSection;