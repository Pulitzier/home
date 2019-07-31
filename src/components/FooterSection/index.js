import React from 'react';
import './style.css';

const FooterSection = (props) => (
  <section id="footer">
    <header>Наши Контакты</header>
    <p>+375 (29) 364-02-64</p>
    <a href="mailto:tak.ef@mail.ru">tak.ef@mail.ru</a>
    <p>Режим работы:</p>
    <p>Пн. - Пт. 08.00 - 19.00</p>
    <p className="brand-name">ИП Такушевич</p>
  </section>
);

export default FooterSection;