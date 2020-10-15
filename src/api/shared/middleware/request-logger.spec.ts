
import { requestLogger }  from './request-logger';
import { logger }  from '../utils';

jest.mock('../utils', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('Middleware: RequestLogger', () => {
  let req: any = {
    body: {},
    header: () => {}
  };
  const res: any = {};
  const next = jest.fn();

  it('Should log the request', () => {
    requestLogger(req, res, next);
    expect(logger.log).toHaveBeenCalled();
  });

  it('Should call the next function', () => {
    requestLogger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
