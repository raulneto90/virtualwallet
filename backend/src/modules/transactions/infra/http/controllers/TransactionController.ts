import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';
import ListTransactionsService from '@modules/transactions/services/ListTransactionsService';

export default class TransactionController {
  async create(request: Request, response: Response): Promise<Response> {
    const { title, value, type } = request.body;

    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({ title, value, type });

    return response.status(201).json(transaction);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listTransactions = container.resolve(ListTransactionsService);

    const { transactions, balance } = await listTransactions.execute();

    return response.json({ transactions, balance });
  }
}
