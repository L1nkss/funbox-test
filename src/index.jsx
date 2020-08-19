// Полифилл для IE11 (не работает findIndex)
import 'react-app-polyfill/ie11';
import 'core-js/features/array/find-index';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './style/style.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
