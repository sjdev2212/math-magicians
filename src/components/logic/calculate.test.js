import calculate from './calculate';

describe('Calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,

  };
  test('should return Object', () => {
    expect(typeof (calculate(obj, 'AC'))).toBe('object');
  });

  test('if buttonName ==0 ,and obj.next==0', () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
  });

  test('when buttonName is .', () => {
    obj.next = '4.2';
    const result = calculate(obj, '.');
    expect(result.next).toBe('4.2');
  });

  test('when buttonName === "=", and obj.next == 0 and operation is null', () => {
    obj.total = '6';
    obj.next = '3';
    obj.operation = '+';

    const solution = calculate(obj, '=');
    expect(solution.total).toBe('9');
  });
});
