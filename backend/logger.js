import dotenv from 'dotenv';
import { createLogger, format, transports } from 'winston';

dotenv.config();

import ConsoleLoggerTransport from './lib/winston-console-transport';

const logTransports = [
  new transports.File({
    level: 'error',
    filename: './logs/error.log',
    format: format.json({
      replacer: (key, value) => {
        if (key === 'error') {
          return {
            message: value.message,
            stack: value.stack,
          };
        }
        return value;
      },
    }),
  }),
  new ConsoleLoggerTransport(),
];

const logger = createLogger({
  level: process.env.NODE_ENV === 'development' ? 'silly' : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    })
  ),
  defaultMeta: { service: process.env.API_NAME },
  transports: logTransports,
});

export default logger;
