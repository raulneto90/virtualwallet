import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu } from './styles';

const Header: React.FC = () => (
  <Container>
    <Menu>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
          <Link to="/transactions">Nova transação</Link>
          <Link to="/reports">Relatórios</Link>
        </li>
      </ul>
    </Menu>
  </Container>
);

export default Header;
