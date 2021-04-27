import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';

import { Container, TransactionOverview, TransactionList } from './styles';

import api from '../../services/api';

interface IBalance {
  income: number;
  outcome: number;
  total: number;
}

interface ITransactions {
  title: string;
  value: string;
  type: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const [balance, setBalance] = useState<IBalance>(Object);
  const [transactions, setTransactions] = useState<ITransactions>(Object);

  useEffect(() => {
    async function loadTransactions() {
      const response = await api.get('/transactions');
      setBalance(response.data.balance);
      setTransactions(response.data.transactions);
    }

    loadTransactions();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <TransactionOverview>
          <Card title="Entradas" type="income" value={balance.income} />
          <Card title="Saídas" type="outcome" value={balance.outcome} />
          <Card title="Total" type="total" value={balance.total} />
        </TransactionOverview>

        <TransactionList>
          <h1>Teste</h1>
        </TransactionList>
      </main>
    </Container>
  );
};

export default Dashboard;
