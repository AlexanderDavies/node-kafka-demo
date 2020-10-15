import { unknownRouteHandler } from './unknown-route-handler';

describe('Middleware: Unknown Route', () => {
  let res: any;
  let req: any;

  beforeEach(() => {
    res = {
      _status: null,
      _body: null,
      status: function (status: number) {
        this._status = status;
        return this;
      },
      json: function (obj: any) {
        this._body = obj;
        return this;
      }
    };
  });

  it(`should return status 404 with message 'resource does not exist'`, () => {
    const result: { _status: number; _body: any } | any = unknownRouteHandler(req, res);

    expect(result._status).toEqual(404);
    expect(result._body.message).toEqual('resource does not exist');
  });
});
