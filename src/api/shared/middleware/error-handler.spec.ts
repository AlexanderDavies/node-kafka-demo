import { errorHandler } from './error-handler';
import { logger } from '../utils';
import { ApiError } from '../models/errors';
import Constants from '../models/constants';

jest.mock('../utils', () => ({
  logger: {
    log: jest.fn()
  }
}));

describe('Middleware: Error', function () {
  let req: any;
  let res: any;
  let next = jest.fn();

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockImplementation(() => res),
      json: jest.fn()
    };
  });

  describe('When an error is passed in', () => {
    const error = new ApiError({ message: 'user not found', status: 404 });
    it('should return the status and message of the error passed in', () => {
      errorHandler(error, req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ errors: null, message: 'user not found' });
    });
  });

  describe('When the error does not contain a status or message', () => {
    const error = new Error();
    it(`should return 500 status with message 'oops! something went wrong'`, () => {
      errorHandler(error, req, res, next);

      expect(res.status).toHaveBeenCalledWith(+Constants.defaultErrorConfig.get('STATUS'));
      expect(res.json).toHaveBeenCalledWith({
        errors: null,
        message: Constants.defaultErrorConfig.get('MESSAGE')
      });
    });
  });

  describe('When no error has been provided', () => {
    it('should call next', () => {
      errorHandler(null, req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });

  it('should log the error', () => {
    const error = new ApiError({ message: 'user not found', status: 400 });
    errorHandler(error, req, res, next);
    expect(logger.log).toHaveBeenCalled();
  });
});
