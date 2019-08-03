import React from 'react';
import './style.css';

const ContactUsSection = (props) => (
  <section id="contact-us">
    <header>Не можете ввести объект в эксплуатацию?</header>
    <p>Закажите проект прямо сейчас и получите консультацию от наших специалистов!</p>
    <form>
      <input type="text" placeholder="Ваш email"/>
      <button type="submit">Заказать проект</button>
    </form>
  </section>
);

export default ContactUsSection;