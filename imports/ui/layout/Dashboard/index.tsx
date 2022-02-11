import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiMenu, FiLogOut } from 'react-icons/fi';

import {
  Container,
  Header,
  SideBarButton,
  LogOutButton,
  Menu,
  MenuItens,
  Item
} from './styles';

interface IPremissions {
  income: boolean,
  user: boolean,
}

const Dashboard: React.FC = () => {
  const [sideBarIsClose, setSideBarIsClose] = useState(true);
  const user = useTracker(() => Meteor.user());
  const [permissions, setPermissions] = useState<IPremissions>({
    income: false,
    user: false,
  })

  useEffect(() => {
    if(user) {
      const userId = user._id;
      
      setPermissions({
        income: Roles.userIsInRole(userId, 'INCOMES_ACCESS'),
        user: Roles.userIsInRole(userId, 'USERS_ACCESS'),
      })
    }
  }, [user?._id])

  const navigation = useNavigate();

  console.log(user);

  const handleLogOut = () => {
    Meteor.logout();

    navigation('../../');
  }

  return (
    <Container>
      <Header>
        <SideBarButton onClick={() => setSideBarIsClose(!sideBarIsClose)}>
          <FiMenu />
        </SideBarButton>
        <LogOutButton onClick={() => handleLogOut()}>
          <FiLogOut/>
        </LogOutButton>
      </Header>
      <Menu sideBarIsClose={sideBarIsClose}>
        <h1>Pizzy</h1>
        <MenuItens>
          <Item canShow>
            <Link to='/dashboard/pizzas'>
              Pizzas
            </Link>
          </Item>
          <Item canShow={permissions.income}>
            <Link to='/dashboard/income'>
              Income
            </Link>
          </Item>
          <Item canShow={permissions.user}>
            <Link to='/dashboard/register_user'>
              New User
            </Link>
          </Item>
        </MenuItens>
      </Menu>
        {user === undefined ? 
        (
          <strong>loading...</strong>
        ) : 
        (
          <Outlet />
        )}
    </Container>
  );
}

export default Dashboard;