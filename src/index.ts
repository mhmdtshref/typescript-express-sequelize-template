import dotenvFlow from 'dotenv-flow';
dotenvFlow.config({ path: './environment' });

import app from './app';
import http from 'http';
import db from '../models';

const httpServer = new http.Server(app);

(async (): Promise<void> => {
  try {
    db.sequelize.authenticate();
    await db.sequelize.sync({
      force: false,
    });
    console.log('Sequelize Synced with PostgreSQL Database');
  } catch (error) {
    console.log('Sequelize connection error: ', error.message);
  }

  const { PORT: port, HOST: host } = process.env
  httpServer.listen(port, (): void => {
    console.log(`Server is running on: http://${host}:${port}`)
  })
})()
