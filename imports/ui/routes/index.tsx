import React from 'react';
import Pizzas from '../pages/Pizzas';
// import Route from './Route';
import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';
import Income from '../pages/Income';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<Pizzas />} />
      <Route path='income' element={<Income />} />
      <Route
          path="/*"
          element={<Navigate to="/" />}
      />
    </ReactRoutes>
  );
}

export default Routes;