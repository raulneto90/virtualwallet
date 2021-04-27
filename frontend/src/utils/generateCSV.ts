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

interface IResponse {
  data: {
    title: string;
    value: string;
    category: string;
    date: string;
  }[];

  options: {
    filename: string;
    showLabels: boolean;
    useKeysAsHeaders: boolean;
    headers: string[];
  };
}

export default function generateCSV(transactions: ITransaction[]): IResponse {
  const headers = [
    {
      label: 'Título',
      key: 'title',
    },
    {
      label: 'Valor',
      key: 'value',
    },
    {
      label: 'Categoria',
      key: 'category',
    },
    {
      label: 'Date',
      key: 'date',
    },
  ];

  const data = transactions.map(transaction => ({
    title: transaction.title,
    value: transaction.formattedValue,
    category: transaction.category.name,
    date: transaction.formattedDate,
  }));

  const options = {
    filename: 'transactions',
    showLabels: true,
    useKeysAsHeaders: false,
    headers: ['Título', 'Valor', 'Categoria', 'Data'],
  };

  return {
    data,
    options,
  };
}
