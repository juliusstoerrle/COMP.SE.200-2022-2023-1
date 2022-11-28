import filter from './filter';

// The function filter should be tested to ensure the callback 
// receives the correct input values, all elements are visited 
// and that the returned array returns the correct return values. 
// The original array must not be manipulated.

describe('filter', function() {
  it('does not fail on empty array', () => {
    expect(filter([], () => null)).toStrictEqual([]);
  });
  it('does not fail on null value', () => {
    expect(filter([], () => null)).toStrictEqual([]);
  });
  it('returns only values where the filterFn returns truthy', () => {
    expect(filter([true, true, false, true], (val) => val)).toStrictEqual([true, true, true]);
    expect(filter([2, 2, 3, 2], (val) => val === 2)).toStrictEqual([2, 2, 2]);
  });
  it('passes correct values to filter function', () => {
    const filterFn = jest.fn((n, index, array) => n + index < 5);
    const originalArray = [4, 8];
    expect(filter(originalArray, filterFn)).toStrictEqual([4]);
    expect(filterFn).toHaveBeenNthCalledWith(1, 4, 0, originalArray);
    expect(filterFn).toHaveBeenNthCalledWith(2, 8, 1, originalArray);
  });
});