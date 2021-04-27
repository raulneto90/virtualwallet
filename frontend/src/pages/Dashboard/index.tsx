import React, { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';

import { Container, TransactionCards } from './styles';

import api from '../../services/api';

interface IBalance {
  income: number;
  outcome: number;
  total: number;
}

const Dashboard: React.FC = () => {
  const [balance, setBalance] = useState<IBalance>(Object);

  useEffect(() => {
    async function getBalance() {
      const response = await api.get('/transactions');
      setBalance(response.data.balance);
    }

    getBalance();
  }, []);

  return (
    <Container>
      <Header />
      <TransactionCards>
        <Card title="Entradas" value={balance.income} type="income" />
        <Card title="Saídas" value={balance.outcome} type="outcome" />
        <Card title="Total" value={balance.total} type="total" />
      </TransactionCards>
    </Container>
  );
};

export default Dashboard;
