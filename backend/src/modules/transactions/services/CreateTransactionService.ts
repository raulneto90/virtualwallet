import { inject, injectable } from 'tsyringe';

import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

interface IRequest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

@injectable()
export default class CreateTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({ title, type, value }: IRequest): Promise<Transaction> {
    const newTransaction = {
      title,
      type,
      value,
    };

    const transaction = await this.transactionsRepository.create(
      newTransaction,
    );

    return transaction;
  }
}
