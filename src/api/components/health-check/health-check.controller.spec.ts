import { healthCheck } from './health-check.controller';
import { responder } from '../../shared/utils';
import Constants from '../../shared/models/constants';

describe('Health Check Controller', () => {
  const req: any = {
    body: {},
    header: jest.fn()
  };
  const res: any = {
    status: function (st: Number) {
      return {
        st,
        json: (data: any) => ({
          ...data,
          status: st
        })
      };
    }
  };
  const next = jest.fn();
  let responderSuccessMock: any;
  const data = { message: 'OK', status: 200 };

  beforeEach(() => {
    responderSuccessMock = jest.spyOn(responder, 'success').mockImplementation((data, req, res) =>
      res.status(200).json({
        data
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return status 200 with pong message', () => {
    const result: any = healthCheck(req, res);

    expect(responderSuccessMock).toHaveBeenCalled();
    expect(result.status).toEqual(+Constants.healthCheckRouteConfig.get('STATUS'));
    expect(result.data.message).toEqual(Constants.healthCheckRouteConfig.get('MESSAGE'));
    expect(result.data).not.toBe(null);
  });
});
