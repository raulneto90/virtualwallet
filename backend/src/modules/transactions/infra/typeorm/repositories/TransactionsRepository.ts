import { getRepository, Repository } from 'typeorm';

import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO';
import IGetBalanceDTO from '@modules/transactions/dtos/IGetBalanceDTO';
import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

import Transaction from '../entities/Transaction';

export default class TransactionsRepository implements ITransactionsRepository {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getRepository(Transaction);
  }

  async create(data: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = this.repository.create(data);

    await this.repository.save(transaction);

    return transaction;
  }

  async listAll(): Promise<Transaction[]> {
    const transactions = await this.repository.find();

    return transactions;
  }

  async getBalance(): Promise<IGetBalanceDTO> {
    const transactionsList = await this.listAll();

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
