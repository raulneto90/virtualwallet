import { getRepository, Repository } from 'typeorm';

import ICreateCategoryDTO from '@modules/transactions/dtos/ICreateCategoryDTO';
import ICategoriesRepository from '@modules/transactions/repositories/ICategoriesRepository';

import Category from '../entities/Category';

export default class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create(data);

    await this.repository.save(category);

    return category;
  }
  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}
