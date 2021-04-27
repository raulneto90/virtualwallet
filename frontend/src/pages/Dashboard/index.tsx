import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';

import { Container, TransactionOverview } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <TransactionOverview>
          <Card title="Entradas" type="income" value={5000} />
          <Card title="Saídas" type="outcome" value={5000} />
          <Card title="Total" type="total" value={5000} />
        </TransactionOverview>
      </main>
    </Container>
  );
};

export default Dashboard;
