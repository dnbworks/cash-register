import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';  // download types
import { AppProvider } from './context/AppContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


