import FakeTransactionsRepository from '@modules/transactions/repositories/fakes/FakeTransactionsRepository';

import ListTransactionsService from '../ListTransactionsService';

let fakeTransactionsRepository: FakeTransactionsRepository;
let listTransactionService: ListTransactionsService;

describe('List transactions', () => {
  beforeEach(() => {
    fakeTransactionsRepository = new FakeTransactionsRepository();
    listTransactionService = new ListTransactionsService(
      fakeTransactionsRepository,
    );
  });

  it('should be able to list transactions', async () => {
    const transactions = await listTransactionService.execute();

    expect(transactions).toBeTruthy();
  });
});
