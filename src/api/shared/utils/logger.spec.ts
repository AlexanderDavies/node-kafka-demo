import winston from 'winston';

describe('Util: Logger', () => {
  describe('When importing the logger', () => {
    let createLoggerSpy: any;

    beforeEach(() => {
      createLoggerSpy = jest.spyOn(winston, 'createLogger');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should return an instance of the logger', () => {
      require('./logger');
      expect(createLoggerSpy).toHaveBeenCalled();
    });
  });
});
