/* istanbul ignore file */

/**
 * Constants class which exposes static maps and single value constants
 */


class Constants {
  static environments = new Map([
    ['DEVELOPMENT', 'development'],
    ['UAT', 'uat'],
    ['SIT', 'sit'],
    ['PRODUCTION', 'production']
  ]);

  static logFiles = new Map([
    ['ERROR', 'error.log'],
    ['COMBINED', 'combined.log']
  ]);

  static logLevels = new Map([
    ['INFO', 'info'],
    ['ERROR', 'error']
  ]);

  static rateLimiterConifg = new Map([
    ['WINDOW_MS', 15 * 60 * 1000],
    ['MAX', 500]
  ]);

  static speedLimiterConfig = new Map([
    ['WINDOW_MS', 15 * 60 * 1000],
    ['DELAY_AFTER', 100],
    ['DELAY_MS', 500]
  ]);


  /* tslint:disable */
  static unknownRouteConfig = new Map([
    ['STATUS', '404'],
    ['MESSAGE', 'resource does not exist']
  ]);

  static healthCheckRouteConfig = new Map([
    ['STATUS', '200'],
    ['MESSAGE', 'pong']
  ]);

  static defaultErrorConfig = new Map([
    ['MESSAGE', 'oops! something went wrong'],
    ['STATUS', '500']
  ]);

  static LOG_SERVICE = 'api-name';
  static LOG_FILE_PATH = '../../../../logs/';
}

export default Constants;
