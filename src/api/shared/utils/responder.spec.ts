import { responder } from './responder';
import { ApiError } from '../models/errors';

describe('Util: Responder', () => {
  const url = 'http://test.com';
  const method = 'GET';
  const req: any = {
    url,
    method,
    body: {},
    header: jest.fn()
  };
  const res: any = {
    status: function (status: number) {
      this._status = status;
      return this;
    },
    json: jest.fn()
  };

  describe('When calling the generateMeta method', () => {
    it('should return the meta object', () => {
      const result = responder.generateMeta(req);
      expect(result.url).toEqual(url);
      expect(result.method).toEqual(method);
    });
  });

  describe('When calling the success method', () => {
    const params = { status: 200, message: 'OK', data: ['test'] };

    it('should call the res object with the status, meta and body', () => {
      responder.success(params, req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('When calling the error method', () => {
    const error = new ApiError({ status: 404, message: 'failed' });
    it('should call the res object with the status, meta and body', () => {
      responder.error(error, req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
