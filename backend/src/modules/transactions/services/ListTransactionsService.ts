import { inject, injectable } from 'tsyringe';

import IGetBalanceDTO from '../dtos/IGetBalanceDTO';
import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

interface IResponse {
  transactions: Transaction[];
  balance: IGetBalanceDTO;
}

@injectable()
export default class ListTransactionsService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute(): Promise<IResponse> {
    const transactions = await this.transactionsRepository.listAll();
    const balance = await this.transactionsRepository.getBalance();

    return {
      transactions,
      balance,
    };
  }
}
