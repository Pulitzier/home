import React from 'react';
import SocialIcons from '../SocialIconsList';
import './style.css';

const FooterSection = () => (
  <section id="footer">
    <header>Контакты</header>
    <p>Республика Беларусь, г. Минск</p>
    <p><b>Телефон:</b> +375293640264</p>
    <p><b>Email:</b> <a href="mailto:tak.ef@mail.ru">tak.ef@mail.ru</a></p>
    <p>Режим работы: пн-вс 08.00 - 19.00</p>
    <p className="header">Мы в социальных сетях</p>
    <SocialIcons dimensions={{ width: 40, height: 40 }} />
  </section>
);

export default FooterSection;