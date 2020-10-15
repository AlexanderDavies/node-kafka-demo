import { name, version, description } from '../../../../package.json';
import Constants from '../../shared/models/constants';
import { responder } from '../../shared/utils';
import { Request, Response } from 'express';

/**
 * Controller to handle health check ping request
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

export const healthCheck = (req: Request, res: Response) => {
  return responder.success(
    {
      status: +Constants.healthCheckRouteConfig.get('STATUS'),
      message: Constants.healthCheckRouteConfig.get('MESSAGE'),
      data: {
        name,
        version,
        description,
        uptime: process.uptime().toString()
      }
    },
    req,
    res
  );
};
