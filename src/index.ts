import dotenvFlow from 'dotenv-flow';
dotenvFlow.config({ path: './environment' });

import { ExpressApp } from './app';
const expressApp = new ExpressApp();
import http from 'http';
import { sequelize } from './models';

const httpServer = new http.Server(expressApp.app);

sequelize.authenticate()
.then(() => sequelize.sync({ force: false }))
.then(() => {
  console.log('Sequelize Synced with PostgreSQL Database');
  const { PORT: port, HOST: host } = process.env
  httpServer.listen(port, (): void => {
    console.log(`Server is running on: http://${host}:${port}`)
  })
})
.catch((error: Error) => {
  console.log('Sequelize connection error: ', error.message);
});
