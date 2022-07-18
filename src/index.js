import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn:
    'https://84c32d08b1144ce89ed9f5c06ccd7ce0@o1323319.ingest.sentry.io/6580968',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.5,
});

export const sendDataToSentry = ({ name, message, extra, tags }) => {
  const error = new Error();
  error.message = message;
  error.name = name;
  if (!tags) tags = {};

  Sentry.captureException(error, {
    tags,
    extra,
  });
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
