import { Request, Response } from 'express';
import { get } from 'lodash';

/**
 * Utiltiy object to standardise the response
 * @type {{generateMeta: function, success: function, error: function}}
 */

export const responder = {
  generateMeta: (req: Request) => ({
    url: get(req, 'url'),
    method: get(req, 'method'),
    timestamp: new Date().toString(),
    requestId: req.header('x-request-id'),
    ip: get(req, 'connection.remoteAddress')
  }),

  success: function (
    { status = 200, message = 'OK', data = '' }: { status: number; message: string; data: any },
    req: Request,
    res: Response
  ) {
    const meta = this.generateMeta(req);

    return res.status(status).json({
      meta,
      message,
      data
    });
  },

  error: function (error: Error, req: Request, res: Response) {
    const meta = this.generateMeta(req);

    const status = get(error, 'status') || 500;
    return res.status(status).json({
      meta,
      message: get(error, 'message') || 'oops, something went wrong!',
      errors: get(error, 'errors') || []
    });
  }
};
