import React, { Component } from 'react';
import './style.css';
import add from '../../static/media/add.svg';

const INITIAL_STATE = {
  reciever: '',
  error: false,
  success: false,
  errorObj: {}
};

export default class ContactUsSection extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleTypeReciever = (event) => {
    let reciever = event.target.value;
    this.setState({ reciever })
  };

  handleSubmit = (event) => {
    const payload = {
      "email": this.state.reciever,
    };
    const API_URL = "https://lk480bz0ef.execute-api.eu-west-1.amazonaws.com/contuct-us/handleSendNotification";

    document.addEventListener('click', this.clearTimeoutAndSetState);

    fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if(res.status == 200) {
          this.setStateAndTimeout({ reciever: '', success: true })
        } else {
          this.setStateAndTimeout({ reciever: '', error: true, errorObj: res })
        }
      })
      .catch(e => this.setStateAndTimeout({ error: true, errorObj: e }));
    event.preventDefault();
  };

  setStateAndTimeout = (opts) => {
    this.setState(opts);
    this.notificationTimeout = setTimeout(() => this.setState(INITIAL_STATE), 3000);
  };

  clearTimeoutAndSetState = () => {
    clearTimeout(this.notificationTimeout);
    this.setState(INITIAL_STATE);
  };

  renderNotificationMessage = () => {
    const { success: successMessage, error: errorMessage } = this.state;
    return (
      <div className={`notification ${ errorMessage ? 'failure' : successMessage ? 'success' : ''}`}>
        <div className="notification-card">
          <button className="close-notification" onClick={this.clearTimeoutAndSetState}>
            <img src={add} alt="Close notification sign"/>
          </button>
          {
            errorMessage ?
              <p>Что-то пошло не так! Приносим свои извинения.</p> :
              successMessage ?
                <p>Ваш email зарегистрирован успешно!</p> :
                null
          }
        </div>
      </div>
  )};

  render() {
    const { reciever: recieverEmail, success, error } = this.state;
    return (
      <section id="contact-us">
        {
          (error || success) ? this.renderNotificationMessage() : null
        }
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