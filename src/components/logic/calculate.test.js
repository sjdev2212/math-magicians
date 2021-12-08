import calculate from './calculate';

describe('Calculate', () => {
  const obj = {
    total : null,
    next:null,
    operation : null,

  }
  test('should return Object', () => {
    expect(typeof (calculate(obj, 'AC'))).toBe('object');
  })
})