import { Response } from 'express';

import app from '../src/app';
import Constants from '../src/api/shared/models/constants';
import supertest, { CallbackHandler } from 'supertest';

const request = supertest(app);

describe('Integration - Health Check', function () {
  describe('GET /ping', () => {
    it('Health check should return 200 status', function (done) {
      request
        .get('/api/v1/health/ping')
        .set('Accept', 'application.json')
        .end((err: any, res: any) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(Constants.healthCheckRouteConfig.get('MESSAGE'));
          done();
        });
    });
  });
});
