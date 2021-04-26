import { createConnection, getConnectionOptions } from 'typeorm';

interface IDatabaseOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IDatabaseOptions;

  newOptions.host = 'database';

  createConnection({ ...options });
});
