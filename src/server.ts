import AppServer from './app';

import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config({ path: './.env' });

import config from './config';

import loggerMiddleware from './middleware/logger';
import RootController from './controllers/index/root.controller';

const port = parseInt(config.port.toString());

const app = new AppServer({
  port,
  controllers: [new RootController()],
  middleWares: [
    morgan('combined'),
    helmet(),
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

app.listen();
