import isDate from './isDate';

// TODO how to test the platform differences?

describe('isDate', function() {
  it('accepts Date object', () => {
    expect(isDate(new Date())).toBe(true);
  });
});