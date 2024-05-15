import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { JournalApp } from './JournalApp';
import reportWebVitals from './reportWebVitals';
import { AppTheme } from './theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();