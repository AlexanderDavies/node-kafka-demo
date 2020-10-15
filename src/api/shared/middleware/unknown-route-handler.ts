import { Request, Response } from 'express';

import Constants from '../models/constants';

/**
 * Unknown Routes Handler
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

export const unknownRouteHandler = (req: Request, res: Response) => {
  return res.status(+Constants.unknownRouteConfig.get('STATUS')).json({
    message: Constants.unknownRouteConfig.get('MESSAGE')
  });
};
