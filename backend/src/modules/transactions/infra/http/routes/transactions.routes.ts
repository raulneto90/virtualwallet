import { Router } from 'express';

import ReportTransactionsController from '../controllers/ReportTransactionsController';
import TransactionController from '../controllers/TransactionController';

const transactionRouter = Router();
const transactionController = new TransactionController();
const reportTransactionController = new ReportTransactionsController();

transactionRouter.post('/', transactionController.create);
transactionRouter.get('/', transactionController.list);
transactionRouter.get('/report/:start/:end', reportTransactionController.list);

export default transactionRouter;
