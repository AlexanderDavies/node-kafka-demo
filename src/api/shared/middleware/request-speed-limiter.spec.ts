import { requestSpeedLimiter } from './request-speed-limiter';

jest.mock('express-slow-down', () => (arg: any) => arg);

describe('Middleware: Rate Limiter', () => {
  it('should return the rate limiter middleware', () => {
    expect(requestSpeedLimiter.delayMs).toEqual(500);
  });
});
