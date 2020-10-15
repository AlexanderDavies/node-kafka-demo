import rateLimit from 'express-rate-limit';
import Constants from '../models/constants';

/**
 * Middleware to limit the response time of requests after a certain number in a defined period e.g. 100 in 15 minutes
 * @function
 * @param {Number} windowMs - the window of time in ms in which the max number is set
 * @param {Number} max - the max number of requests that are allowed
 */

export const requestRateLimiter: any = rateLimit({
  windowMs: Constants.rateLimiterConifg.get('WINDOW_MS'),
  max: Constants.rateLimiterConifg.get('MAX')
});
