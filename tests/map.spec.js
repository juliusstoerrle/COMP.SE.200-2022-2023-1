import map from '../src/map';

// The map function must be tested to ensure all values are passed to the 
// callback function and all the returned values are returned in one array.

describe('map', function() {
  it('executes function on each entry', () => {
    const originalArray = [4, 8];
    expect(map(originalArray, n => n*n)).toStrictEqual([16, 64]);
  });

  it('leaves the original array untouched', () => {
    const originalArray = [4, 8];
    expect(map(originalArray, n => n*n)).toStrictEqual([16, 64]);
    expect(originalArray).toStrictEqual([4, 8]);
  });

  it('passes correct values to mapper function', () => {
    const mapperFn = jest.fn((n, index, array) => n + index);
    const originalArray = [4, 8];
    expect(map(originalArray, mapperFn)).toStrictEqual([4, 9]);
    expect(mapperFn).toHaveBeenNthCalledWith(1, 4, 0, originalArray);
    expect(mapperFn).toHaveBeenNthCalledWith(2, 8, 1, originalArray);
  });

  it('can handle null values', () => {
    expect(map(null, n => n*n)).toStrictEqual([]);
  });
  
  it('can handle empty array values', () => {
    expect(map([], n => n*n)).toStrictEqual([]);
  });
});