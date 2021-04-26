import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO';
import IGetBalanceDTO from '@modules/transactions/dtos/IGetBalanceDTO';
import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';

import ITransactionsRepository from '../ITransactionsRepository';

export default class FakeTransactionsRepository
  implements ITransactionsRepository {
  private transactions: Transaction[] = [];

  async create(data: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = new Transaction();

    Object.assign(transaction, data);

    this.transactions.push(transaction);

    return transaction;
  }

  async listAll(): Promise<Transaction[]> {
    return this.transactions;
  }

  async getBalance(): Promise<IGetBalanceDTO> {
    const transactionsList = this.transactions;

    const income = transactionsList
      .filter(transaction => transaction.type === 'income')
      .reduce((accumulator, transaction) => {
        return accumulator + transaction.value;
      }, 0);

    const outcome = transactionsList
      .filter(transaction => transaction.type === 'outcome')
      .reduce((accumulator, transaction) => {
        return accumulator + transaction.value;
      }, 0);

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }
}
