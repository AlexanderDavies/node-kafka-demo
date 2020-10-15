import { generateRequestId } from './generate-x-request-id';

describe('Util: Generate X-Request-Id', () => {
  describe('When generating the x-request-id', () => {
    it('should return a 36 character guid', () => {
      const result = generateRequestId();
      expect(result.length).toEqual(36);
    });
  });
});
