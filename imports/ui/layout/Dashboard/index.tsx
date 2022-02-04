import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Menu,
  MenuItens,
  Item
} from './styles';

const Dashboard: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu>
        <h1>Pizzy</h1>
        <MenuItens>
          <Item>
            <Link to='/'>
              Pizzas
            </Link>
          </Item>
          <Item>
            <Link to='/income'>
              Income
            </Link>
          </Item>
        </MenuItens>
      </Menu>
      {children}
    </Container>
  );
}

export default Dashboard;