import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import add from '../../static/media/add.svg';

const emailService = emailjs.init('user_Urau34ke5gdJYxVY5GhOY');
const INITIAL_STATE = {
  userEmail: '',
  userName: '',
  comment: '',
  error: false,
  success: false,
  errorObj: {}
};

export default class ContactUsSection extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleTypeName = ({ target: { value = null} }) => this.setState({ userName: value });
  handleTypeEmail = ({ target: { value = null} }) => this.setState({ userEmail: value });
  handleTypeComment = ({ target: { value = null} }) => this.setState({ comment: value });

  sendEmailOnError = (error) => {
    emailjs.send('default_service', 'error_email_iuYDJ7', error);
    this.setStateAndTimeout({ userEmail: '', userName: '', comment: '', error: true, errorObj: error })
  }

  handleSubmit = (event) => {
    document.addEventListener('click', this.clearTimeoutAndSetState);
    event.preventDefault();
    const templateParams = {
      userEmail: this.state.userEmail,
      userName: this.state.userName,
      comment: this.state.comment,
    };
    emailjs.send('default_service', 'template_utaLJUEi', templateParams)
      .then(
        response => this.setStateAndTimeout({ userEmail: '', userName: '', comment: '', success: true }),
        error => this.sendEmailOnError(error)
      )
      .catch(this.sendEmailOnError);
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
    const { userName, comment, userEmail, success, error } = this.state;
    return (
      <section id="contact-us">
        {
          (error || success) ? this.renderNotificationMessage() : null
        }
        <header>Не можете ввести объект в эксплуатацию?</header>
        <p>Закажите проект прямо сейчас и получите консультацию от наших специалистов!</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Ваше имя" value={userName} onChange={this.handleTypeName}/>
          <input
            className="required"
            type="text"
            placeholder="Ваш email *(обязательно)"
            value={userEmail}
            onChange={this.handleTypeEmail}
          />
          <input type="text" placeholder="Комментарии" value={comment} onChange={this.handleTypeComment}/>
          <button type="submit">Заказать проект</button>
        </form>
      </section>
    )
  }
};