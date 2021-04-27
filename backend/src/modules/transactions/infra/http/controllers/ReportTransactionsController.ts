import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ReportTransactionsService from '@modules/transactions/services/ReportTransactionService';

export default class ReportTransactionsController {
  async list(request: Request, response: Response): Promise<Response> {
    const { start, end } = request.params;

    const listTransactions = container.resolve(ReportTransactionsService);

    const transactions = await listTransactions.execute({
      startDate: start,
      endDate: end,
    });

    return response.json(transactions);
  }
}
