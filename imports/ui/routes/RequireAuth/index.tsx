import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Navigate } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

const RequireAuth: React.FC = ({ children }) => {
  const user = useTracker(() => Meteor.user());

  if(user === null) {
    return <Navigate to="/" />
  }

  return (
    <>
      {children}
    </>
  );
}

export default RequireAuth;