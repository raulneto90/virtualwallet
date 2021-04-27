import { container } from 'tsyringe';

import CategoriesRepository from '@modules/transactions/infra/typeorm/repositories/CategoriesRepository';
import TransactionsRepository from '@modules/transactions/infra/typeorm/repositories/TransactionsRepository';
import ICategoriesRepository from '@modules/transactions/repositories/ICategoriesRepository';
import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
