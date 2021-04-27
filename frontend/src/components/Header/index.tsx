import React from 'react';
import { FiList } from 'react-icons/fi';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <a href="teste" type="button">
          <FiList size={35} />
        </a>
      </header>
    </Container>
  );
};

export default Header;
