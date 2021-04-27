import React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container, TransactionOverview, Card } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <TransactionOverview>
          <Card>
            <header>
              <p>Seu saldo</p>
              <FiDollarSign size={20} color="#0EB114" />
            </header>

            <h1>R$ 15.000,00</h1>
          </Card>
        </TransactionOverview>
      </main>
    </Container>
  );
};

export default Dashboard;
