import React, { Component } from 'react';
import './style.css';

export default class ContactUsSection extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTypeReciever = this.handleTypeReciever.bind(this);
    this.state = {
      reciever: ''
    }
  }

  handleTypeReciever(event) {
    let reciever = event.target.value;
    this.setState({ reciever })
  }

  handleSubmit(event) {
    const payload = {
      email: this.state.reciever,
    };
    console.dir(payload);
    const API_URL = "https://lk480bz0ef.execute-api.eu-west-1.amazonaws.com/contuct-us/handleSendNotification";
    fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: payload
    })
      .then(res => console.log(res))
      .catch(e => console.error(e.message));
    event.preventDefault();
  }

  render() {
    const recieverEmail = this.state.reciever;
    return (
      <section id="contact-us">
        <header>Не можете ввести объект в эксплуатацию?</header>
        <p>Закажите проект прямо сейчас и получите консультацию от наших специалистов!</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Ваш email" value={recieverEmail} onChange={this.handleTypeReciever}/>
          <button type="submit">Заказать проект</button>
        </form>
      </section>
    )
  }
};