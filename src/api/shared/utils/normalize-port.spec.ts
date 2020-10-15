import { normalizePort }  from './normalize-port';

describe('Util: Normalize Port', function () {
  it('should return the arg if it is not a number', function () {
    expect(normalizePort('error')).toEqual('error');
  });

  it('should return the port if it is a positive number', function () {
    expect(normalizePort(3000)).toEqual(3000);
  });

  it('should return the port if a string can be converted to a positive number', function () {
    expect(normalizePort('3000')).toEqual(3000);
  });

  it('should return false if port is a negative number', function () {
    expect(normalizePort(-300)).toBe(false);
  });
});
