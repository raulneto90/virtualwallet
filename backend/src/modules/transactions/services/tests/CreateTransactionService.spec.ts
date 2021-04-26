import FakeTransactionsRepository from '@modules/transactions/repositories/fakes/FakeTransactionsRepository';

import CreateTransactionService from '../CreateTransactionService';

let fakeTransactionsRepository: FakeTransactionsRepository;
let createTransactionService: CreateTransactionService;

describe('Create transactions', () => {
  beforeEach(() => {
    fakeTransactionsRepository = new FakeTransactionsRepository();
    createTransactionService = new CreateTransactionService(
      fakeTransactionsRepository,
    );
  });

  it('should be able to create a new transaction', async () => {
    const transaction = await createTransactionService.execute({
      title: 'New transaction',
      type: 'income',
      value: 2500,
    });

    expect(transaction).toHaveProperty('id');
  });
});
