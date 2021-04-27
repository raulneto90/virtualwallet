import React, { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { Bar } from 'react-chartjs-2';

import Header from '../../components/Header';

import {
  Container,
  TransactionOverview,
  Card,
  Transactions,
  TableContainer,
  ListType,
  Chart,
} from './styles';

import api from '../../services/api';

import formatValue from '../../utils/formatValue';

interface ITransaction {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: {
    name: string;
  };
  created_at: Date;
  formattedValue: string;
  formattedDate: string;
}

interface IBalance {
  total: string;
}

const Dashboard: React.FC = () => {
  const [chart, setChart] = useState(false);
  const [list, setList] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
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

          <ListType>
            <button type="button" className={list ? 'active' : ''}>
              Lista
            </button>
            <button type="button">Gráfico</button>
          </ListType>

          {transactions && !!list && (
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td className="title">{transaction.title}</td>
                      <td className={transaction.type}>
                        {transaction.type === 'outcome' && ' - '}
                        {transaction.formattedValue}
                      </td>
                      <td>{transaction.category.name}</td>
                      <td>{transaction.formattedDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          )}
        </Transactions>
      </main>
    </Container>
  );
};

export default Dashboard;
