import { NextFunction, Request, Response } from 'express';
import services from '../../shared/services';
import { responder } from '../../shared/utils';
import messageService from './message.service';

/**
 * Controller to handle post message route
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

export const postMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await messageService.sendMessage(req.body);

    return responder.success(
      {
        status: 200,
        message: 'successfully posted message',
        data
      },
      req,
      res
    );
  } catch (err) {
    next(err);
  }
};

