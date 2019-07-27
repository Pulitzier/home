import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './static/index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { bindEventsListener } from './helpers/functions.js';

ReactDOM.render(<App />, document.getElementById('root'));

bindEventsListener();

serviceWorker.unregister();
