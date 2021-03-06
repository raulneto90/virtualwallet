import React, { useCallback, useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';

import { ExportToCsv } from 'export-to-csv';
import Header from '../../components/Header';

import {
  Container,
  TransactionOverview,
  Card,
  Transactions,
  TableContainer,
  ListType,
} from './styles';

import api from '../../services/api';

import formatValue from '../../utils/formatValue';
import generateCSV from '../../utils/generateCSV';

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

  const handleGenerateCSV = useCallback(() => {
    const { data, options } = generateCSV(transactions);

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(data);
  }, [transactions]);

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
          <h2>Hist??rico de transa????es</h2>

          <ListType>
            <button type="button" className={list ? 'active' : ''}>
              Lista
            </button>
            <button type="button">Gr??fico</button>
          </ListType>

          <button type="button" onClick={handleGenerateCSV}>
            Exportar CSV
          </button>

          {transactions && !!list && (
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>T??tulo</th>
                    <th>Pre??o</th>
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
