import winston from 'winston';
import path from 'path';
import Constants from '../models/constants';

const filePath = path.join(__dirname, Constants.LOG_FILE_PATH);

const winstonLogger = winston.createLogger({
  level: Constants.logLevels.get('INFO'),
  format: winston.format.json(),
  defaultMeta: { service: Constants.LOG_SERVICE },
  transports: [
    new winston.transports.File({
      filename: filePath + Constants.logFiles.get('ERROR'),
      level: Constants.logLevels.get('ERROR')
    }),
    new winston.transports.File({ filename: filePath + Constants.logFiles.get('COMBINED') })
  ]
});

if (process.env.NODE_ENV !== Constants.environments.get('PRODUCTION')) {
  winstonLogger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

export const logger = winstonLogger;
