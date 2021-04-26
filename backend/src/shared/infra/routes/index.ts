import { Router } from 'express';

import transactionRouter from '@modules/transactions/infra/http/routes/transactions.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);

export default routes;
