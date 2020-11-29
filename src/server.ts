import App from './app';

import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import loggerMiddleware from './middleware/logger';
import RootController from './controllers/index/root.controller';

const app = new App({
  port: 3000,
  controllers: [new RootController()],
  middleWares: [
    morgan('dev'),
    helmet(),
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

app.listen();
