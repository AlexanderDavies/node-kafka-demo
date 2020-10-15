import { Response, Request, NextFunction } from 'express';
import { get } from 'lodash';

import { logger } from '../utils';

/**
 * Middleware to log the request
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const requestData = {
    url: get(req, 'url'),
    method: get(req, 'method'),
    timestamp: new Date().toString(),
    headers: JSON.stringify(get(req, 'headers')),
    ip: get(req, 'connection.remoteAddress'),
    body: get(req, 'body'),
    params: get(req, 'params'),
    query: get(req, 'query')
  };

  logger.log({
    level: 'info',
    request: requestData,
    message: 'request body'
  });

  next();
};
