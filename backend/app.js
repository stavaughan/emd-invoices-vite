import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload';
import rateLimit, { MemoryStore } from 'express-rate-limit';
import { contentSecurityPolicy } from 'helmet';
import path from 'path';

import connectDB from './config/db';
import logger from './logger';
import setCache from './middleware/cache-control';
import {
  documentsRouter,
  esecRouter,
  imagesRouter,
  settingsRouter,
  standardRouter,
  usersRouter,
} from './routes/routers';
import messages from './utils/messages';

dotenv.config();

connectDB();

const app = express();
const PREFIX = '/api';

app.set('port', process.env.PORT || 4444);

app.use((req, res, next) => {
  const startTime = process.hrtime();
  res.on('finish', () => {
    const elapsedTime = process.hrtime(startTime);
    const timeInMs = elapsedTime[0] * 1000 + elapsedTime[1] / 1e6;
    logger.log({
      level: 'debug',
      message: `${req.method} ${res.statusCode} ${timeInMs}ms\t${req.path}`,
      consoleLoggerOptions: { label: process.env.API_NAME },
    });
  });
  next();
});

app.use(fileUpload());

app.use(
  compression({
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false;
      }
      // fallback to standard filter function
      return compression.filter(req, res);
    },
  })
);

app.use(
  contentSecurityPolicy({
    directives: {
      'script-src': ["'self'", 'cdn.jsdelivr.net'],
      'img-src': ["'self'", 'res.cloudinary.com', 'data:', 'blob:'],
    },
  })
);

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'development'
        ? process.env.DOMAIN_DEV
        : process.env.DOMAIN_PROD,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: '50mb',
    extended: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(setCache);

app.use(
  `${PREFIX}/`,
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    store: new MemoryStore(),
  })
);

app.use(`${PREFIX}/users`, usersRouter);
app.use(`${PREFIX}/app-settings`, settingsRouter);

// Cloudinary images
app.use(`${PREFIX}/images`, imagesRouter);

// MongoDB multi document collections
app.use(`${PREFIX}/contacts`, standardRouter);
app.use(`${PREFIX}/businesses`, standardRouter);
app.use(`${PREFIX}/customers`, standardRouter);
app.use(`${PREFIX}/invoices`, standardRouter);
app.use(`${PREFIX}/services`, standardRouter);
app.use(`${PREFIX}/admin`, standardRouter);
app.use(`${PREFIX}/email-list`, standardRouter);
app.use(`${PREFIX}/user-permissions`, standardRouter);
app.use(`${PREFIX}/user-roles`, standardRouter);

app.use(`${PREFIX}/esec`, esecRouter);

// pdf files stored in file system
app.use(`${PREFIX}/document-files`, documentsRouter);

// const __dirname = currDir(import.meta.url);

if (process.env.NODE_ENV === 'development') {
  app.get('/*', (_req, res) => res.send(messages.noAccess()));
} else {
  app.use(
    express.static(path.join(__dirname, '../frontend/dist'), {
      maxAge: 31557600000,
    })
  );
  app.get('/*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
  });
}

export { app };
