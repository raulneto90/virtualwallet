import React, { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  TransactionOverview,
  Card,
  Transactions,
  TransactionsList,
} from './styles';

import api from '../../services/api';

import formatValue from '../../utils/formatValue';

interface ITransaction {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
  created_at: Date;
  formattedValue: string;
  formattedDate: string;
}

interface IBalance {
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>(Object);
  const [balance, setBalance] = useState<IBalance>(Object);

  useEffect(() => {
    async function loadTransactions() {
      const response = await api.get('/transactions');

      const transactionsFormatted = response.data.transactions.map(
        (transaction: ITransaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-br',
          ),
        }),
      );

      const balanceFormatted = {
        total: formatValue(response.data.balance.total),
      };

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted);
    }

    loadTransactions();
  }, []);

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

            <h1>{balance.total}</h1>
          </Card>
        </TransactionOverview>

        <Transactions>
          <h2>Histórico de transações</h2>

          <TransactionsList>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr>
                  <td>{transaction.title}</td>
                  <td>{transaction.formattedValue}</td>
                  <td>Teste</td>
                  <td>{transaction.formattedDate}</td>
                </tr>
              ))}
            </tbody>
          </TransactionsList>
        </Transactions>
      </main>
    </Container>
  );
};

export default Dashboard;
