import { v4 }  from 'uuid';

/**
 * Utility function to create a guid Id for x-request-id headers
 * @function
 */


export const generateRequestId = () => {
  return v4();
};
