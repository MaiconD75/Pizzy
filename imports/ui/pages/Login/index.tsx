import React, { useCallback, useState } from 'react';
import { TextField } from '@mui/material';

import { Container } from './styles';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigate();
  
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);

    if(Meteor.user() !== null) {
      navigation('/dashboard/pizzas');
    }
  }, [username, password]);
  

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <TextField label="Username" variant="outlined" onChange={e => setUsername(e.currentTarget.value)}/>
        <TextField label="Password" type="password" variant="outlined" onChange={e => setPassword(e.currentTarget.value)}/>
        <button type="submit">Login</button>
      </form>
    </Container>
  );
}

export default Login;