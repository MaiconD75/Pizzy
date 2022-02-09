import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

export const App = () => (
  <div>
      <BrowserRouter>
            <Routes />
      </BrowserRouter>
  </div>
);
