/* istanbul ignore file */

import app from './app';
import { normalizePort, logger } from './api/shared/utils';
import Constants from './api/shared/models/constants';

if (process.env.NODE_ENV !== Constants.environments.get('PRODUCTION')) {
  require('dotenv').config();
}

const server: any = app.listen(normalizePort(process.env.PORT || 3000));

//log the connection
logger.log({
  level: Constants.logLevels.get('INFO'),
  message: `connected on ${server.address().port}`
});
