import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './layout/Dashboard';
import Routes from './routes';

export const App = () => (
  <div>
      <BrowserRouter>
        <Dashboard >
            <Routes />
        </Dashboard>
      </BrowserRouter>
  </div>
);
