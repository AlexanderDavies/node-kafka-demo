import { round } from 'lodash';

/**
 * Utiltiy functiion to nomalize the process.ENV port value
 * @function
 * @param {(number|string)} val - the port value
 */


export const normalizePort = (val: string | number): number | boolean | string => {
  let port;

  if (typeof val === 'number') {
    port = round(val, 0);
  }

  if (typeof val === 'string') {
    port = parseInt(val, 10);
  }

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};
