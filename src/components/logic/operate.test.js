import operate from './operate';

describe('it should return a string', () => {
  test('should return string', () => {
    expect(typeof (operate('1', '3', '+'))).toBe('string');
  });
  test('should add numbers', () => {
    expect(operate('1', '3', '+')).toBe('4');
  });
  test('should substract numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });
  test('should multiply numbers', () => {
    expect(operate('3', '3', 'x')).toBe('9');
  });
  test('should divide numbers', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });
});
