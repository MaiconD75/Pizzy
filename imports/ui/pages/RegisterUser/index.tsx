import { TableBody, TableCell, TextField } from '@mui/material';
import { Table } from '@mui/material';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { 
  Container,
  SelectRoleContainer,
  ButtonContainer,
  CustomTableRow,
} from './styles';

interface roleProps {
  id: number
  name: string;
}

// add isAdded to roles props

const roles = [
  { id: 1, name: 'admin' },
  { id: 2, name: 'accountant' },
  { id: 3, name: 'user' },
];

const RegisterUser: React.FC = () => {
  const user = useTracker(() => Meteor.user());

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [getAccess, setGetAccess] = useState(true);
  const [addedRoles, setAddedRoles] = useState<roleProps[]>([]);
  const [currentSelectedRole, setCurrentSelectedRole] = useState<roleProps>({} as roleProps);

  useEffect(() => {
    if (user?._id) {
      setGetAccess(Roles.userIsInRole(user._id, 'USERS_ACCESS'));
    }
  }, [user?._id])
  
  const handleAddRole = useCallback(() => {
    if(addedRoles.indexOf(currentSelectedRole) === -1 && currentSelectedRole.id) {
      setAddedRoles([...addedRoles, currentSelectedRole]);
      setCurrentSelectedRole({} as roleProps);
    }
  }, [currentSelectedRole, addedRoles]);

  const handleRemoveRole = useCallback(() => {
    if(addedRoles.indexOf(currentSelectedRole) !== -1) {
      setAddedRoles(addedRoles.filter(r => r.id !== currentSelectedRole.id));
    }
  }, [currentSelectedRole, addedRoles]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Meteor.call('users.insert', {username, password});

    const newUser = Meteor.call('users.find_by_username', {username});

    if (newUser) {
      Roles.addUsersToRoles(newUser, addedRoles.map(role => role.name));
    }

    setUsername('');
    setPassword('');
  }, [username, password]);

  if (!getAccess) {
    return <Navigate to="/dashboard/pizzas" />
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Register User</h1>
        <TextField 
          label="Username" 
          variant="outlined" 
          value={username} 
          onChange={e => setUsername(e.currentTarget.value)} 
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          value={password} 
          onChange={e => setPassword(e.currentTarget.value)}
        />
          <strong>
            Roles
          </strong>
          <SelectRoleContainer>
            <Table>
              <TableBody>
                {roles.map(role => (
                  <CustomTableRow key={role.id} 
                    onClick={() => setCurrentSelectedRole(role)}
                    selected={currentSelectedRole.id === role.id && addedRoles.indexOf(role) === -1}
                    $isAdded={addedRoles.indexOf(role) !== -1}
                  >
                    <TableCell>
                      {role.name}
                    </TableCell>
                  </CustomTableRow>
                ))}
              </TableBody>
            </Table>
            <ButtonContainer>
              <button type="button" onClick={handleAddRole} >+</button>
              <button type="button" onClick={handleRemoveRole} >-</button>
            </ButtonContainer>
            <Table>
              <TableBody>
                {addedRoles.map(role => (
                  <CustomTableRow key={role.id} 
                    onClick={() => setCurrentSelectedRole(role)}
                    selected={currentSelectedRole.id === role.id}
                  >
                    <TableCell>
                      {role.name}
                    </TableCell>
                  </CustomTableRow>
                ))}
              </TableBody>
            </Table>
          </SelectRoleContainer>
        <button type="submit">Register</button>
      </form>
    </Container>
  );
}

export default RegisterUser;