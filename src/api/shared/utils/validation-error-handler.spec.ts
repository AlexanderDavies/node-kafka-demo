import expressValidator  from 'express-validator';
import validateUtil  from './validation-error-handler';

jest.mock('express-validator', () => ({
  validationResult: () => ({
    isEmpty: () => {
      return true;
    },
    array: () => {}
  })
}));

describe('Util: Validation Error Handler', function () {
  let validationResultSpy: any;

  beforeEach(() => {
    validationResultSpy = jest.spyOn(expressValidator, 'validationResult');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return true if no errors have been added to the req object', function () {
    let req: any = {};
    validationResultSpy.mockImplementation(() => {
      return {
        isEmpty: () => {
          return true;
        },
        array: () => {}
      };
    });

    const result = validateUtil.validate(req);

    expect(result).toBe(true);
  });

  it('should throw an error if middleware has has added an errors object to the req object', () => {
    try {
      let req: any = {};
      validationResultSpy.mockImplementation(() => {
        return {
          isEmpty: () => {
            return false;
          },
          array: () => {
            return [{ msg: 'invalid user' }];
          }
        };
      });
      validateUtil.validate(req);
    } catch (err) {
      expect(err.message).toEqual('invalid user');
    }
  });
});
