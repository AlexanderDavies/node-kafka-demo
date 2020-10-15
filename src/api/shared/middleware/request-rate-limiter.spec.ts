import { requestRateLimiter } from './request-rate-limiter';
import Constants from '../models/constants';

jest.mock('express-rate-limit', () => (arg: any) => arg);

describe('Middleware: Rate Limiter', () => {
  it('should return the rate limiter middleware', () => {
    expect(requestRateLimiter.max).toEqual(Constants.rateLimiterConifg.get('MAX'));
    expect(requestRateLimiter.windowMs).toEqual(Constants.rateLimiterConifg.get('WINDOW_MS'));
  });
});
