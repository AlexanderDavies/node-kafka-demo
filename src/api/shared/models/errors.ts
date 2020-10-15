

/**
 * Creates an ApiError object which extends the native JS Error object
 * @constructor
 * @param {{message: string, status: number} errorParams description - the error paramaters
 */

export class ApiError extends Error {
  status: number;
  errors: any[];

  constructor({
    message = '',
    status = 500,
    errors = null
  }: {
    message: string;
    status: number;
    errors?: any[];
  }) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}
