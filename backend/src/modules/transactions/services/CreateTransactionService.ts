import { inject, injectable } from 'tsyringe';

import Transaction from '../infra/typeorm/entities/Transaction';
import ICategoriesRepository from '../repositories/ICategoriesRepository';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

interface IRequest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

@injectable()
export default class CreateTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,

    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({
    title,
    type,
    value,
    category,
  }: IRequest): Promise<Transaction> {
    let category_id;
    const categoryExists = await this.categoriesRepository.findByName(category);

    if (categoryExists) {
      category_id = categoryExists.id;
    } else {
      const newCategory = await this.categoriesRepository.create({
        name: category,
      });

      category_id = newCategory.id;
    }

    const newTransaction = {
      title,
      type,
      value,
      category_id,
    };

    const transaction = await this.transactionsRepository.create(
      newTransaction,
    );

    return transaction;
  }
}
