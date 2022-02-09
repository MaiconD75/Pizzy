import React from 'react';
import Pizzas from '../pages/Pizzas';
import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';
import Income from '../pages/Income';
import Login from '../pages/Login';
import Dashboard from '../layout/Dashboard';
import RequireAuth from './RequireAuth';

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<Login />} />
      <Route path='dashboard' element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      } >
        <Route path='pizzas' element={<Pizzas />} />
        <Route path='income' element={<Income />} />
      </Route>
      <Route
          path="/*"
          element={<Navigate to="/dashboard" />}
      />
    </ReactRoutes>
  );
}

export default Routes;