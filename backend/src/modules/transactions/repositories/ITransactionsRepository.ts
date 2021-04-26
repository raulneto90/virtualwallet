import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';
import IGetBalanceDTO from '../dtos/IGetBalanceDTO';
import Transaction from '../infra/typeorm/entities/Transaction';

export default interface ITransactionsRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  listAll(): Promise<Transaction[]>;
  getBalance(): Promise<IGetBalanceDTO>;
}
