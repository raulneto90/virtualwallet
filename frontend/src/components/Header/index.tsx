import React from 'react';

import { Container, Content, Menu } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Menu>
        <a href="#teste">Nova transação</a>
        <a href="#teste">Relatórios</a>
      </Menu>
    </Content>
  </Container>
);

export default Header;
