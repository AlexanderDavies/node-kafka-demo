import { setAccessHeaders } from './set-access-headers';

describe('Middleware: Set Access Headers', () => {
  describe('When passing the middleware', () => {
    const req: any = {};
    const res: any = {
      headers: [],
      setHeader: function (header: any) {
        this.headers.push(header);
      }
    };
    const next = jest.fn();
    it('should set the expected access headers', () => {
      setAccessHeaders(req, res, next);
    });

    it('should call the next function', () => {
      setAccessHeaders(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});
