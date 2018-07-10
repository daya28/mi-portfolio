import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
