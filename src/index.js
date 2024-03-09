import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './../node_modules/animate.css/animate.css'
import reportWebVitals from './Web';
import GifExpertApp from './Categorias';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
