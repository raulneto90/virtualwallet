import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

interface IRequest {
  startDate: string;
  endDate: string;
}

@injectable()
export default class ReportTransactionsService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({ startDate, endDate }: IRequest): Promise<Transaction[]> {
    const start = startOfDay(parseISO(startDate));
    const end = endOfDay(parseISO(endDate));

    const transactions = await this.transactionsRepository.listByPeriod(
      start,
      end,
    );

    return transactions;
  }
}
