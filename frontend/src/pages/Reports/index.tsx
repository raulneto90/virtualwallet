import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import Header from '../../components/Header';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import generateCSV from '../../utils/generateCSV';

import {
  Container,
  ReportContainer,
  TableContainer,
  Transactions,
} from './styles';

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

interface ICSVFile {
  data: {
    title: string;
    value: string;
    category: string;
    date: string;
  }[];

  headers: {
    label: string;
    key: string;
  }[];

  filename: string;
}

const Reports: React.FC = () => {
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [csvFile, setCsvFile] = useState<ICSVFile>();
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const response = await api.get(
        `/transactions/report/${startDate}/${endDate}`,
      );

      const transactionsFormatted = response.data.map(
        (transaction: ITransaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-br',
          ),
        }),
      );

      setTransactions(transactionsFormatted);
    },
    [startDate, endDate],
  );

  return (
    <Container>
      <Header />
      <ReportContainer>
        <h2>Relatórios</h2>

        <form onSubmit={handleSubmit}>
          <div className="interval ">
            <h3>Selecione o período</h3>

            <input
              required
              type="date"
              name="startDate"
              onChange={e => setStartDate(e.target.value)}
            />
            <input
              required
              type="date"
              name="endDate"
              onChange={e => setEndDate(e.target.value)}
            />
          </div>

          <button type="submit">Gerar</button>
        </form>
      </ReportContainer>
      {transactions.length > 0 && (
        <Transactions>
          <h2>Histórico de transações</h2>

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
        </Transactions>
      )}
    </Container>
  );
};

export default Reports;
