import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './features/app/App';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import { Provider } from 'react-redux';
import store from './config/store';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://39d825804c014af595f6bc26e95c697c@o461316.ingest.sentry.io/5462964',
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});

LogRocket.init('edatn0/techs');

LogRocket.identify('123457', {
  name: 'Will',
  email: 'william.wei@hoolah.co',
  subscriptionType: 'premium',
  favouriteFood: 'burgers',
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
