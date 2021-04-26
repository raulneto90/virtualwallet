import 'dotenv/config';
import '@shared/database';
import '@shared/container';
import express from 'express';

import routes from '../routes';

const app = express();

app.use(express.json());
app.use(routes);

export default app;
