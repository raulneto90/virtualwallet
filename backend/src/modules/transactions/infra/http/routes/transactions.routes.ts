import { Router } from 'express';

import TransactionController from '../controllers/TransactionController';

const transactionRouter = Router();
const transactionController = new TransactionController();

transactionRouter.use('/', transactionController.create);

export default transactionRouter;
