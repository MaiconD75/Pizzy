import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Navigate } from 'react-router-dom';

const RequireAuth: React.FC = ({ children = true }) => {

  if(Meteor.user() === null) {
    return <Navigate to="/" />
  }

  return (
    <>
      {children}
    </>
  );
}

export default RequireAuth;