import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO';
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
}
