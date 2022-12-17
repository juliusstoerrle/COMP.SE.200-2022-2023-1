import memoize from '../src/memoize';

// The memoize function should be tested to ensure that un-changed inputs
// do not retrigger a new execution of the inner function and the correct 
// result for each input is returned

// Setup:
function getA(user) {
  return user.a;
}

function getUsername(user) {
  return user.username;
}

const userA = {username: 'JaneDoe', a:123};
const userB = {username: 'Max', a:256};

describe('memoize', function() {
  it('caches values with resolver', () => {
    const wrappedFn = jest.fn(getA);
    const fn = memoize(wrappedFn, getUsername);
    expect(fn(userA)).toBe(123);
    expect(fn(userB)).toBe(256);
    expect(fn(userA)).toBe(123);
    expect(wrappedFn).toHaveBeenCalledTimes(2);
  });

  it('can cache without resolver', () => {
    const wrappedFn = jest.fn(v => v * v);
    const fn = memoize(wrappedFn);
    expect(fn(235)).toBe(55225);
    expect(fn(10)).toBe(100);
    expect(fn(235)).toBe(55225);
    expect(wrappedFn).toHaveBeenCalledTimes(2);
  });

  describe('throws when', () => {
    it('no function was provided', () => {
      expect(() => memoize('')).toThrow();
    })

    it('non callable value provided as resolver', () => {
      expect(() => memoize(() => null, '')).toThrow();
    })
  })

  it('can use WeakMap as cache implementation', () => {
    // NOTE: this only tests object keys as WeakMap does not allow other key types
    memoize.Cache = WeakMap;
    const wrappedFn = jest.fn(v => v.a);
    const fn = memoize(wrappedFn);
    expect(fn(userA)).toBe(123);
    expect(fn(userB)).toBe(256);
    expect(fn(userA)).toBe(123)
    expect(wrappedFn).toHaveBeenCalledTimes(2);
  });

  it('uses default Map if Cache is set to null', () => {
    memoize.Cache = null;
    const wrappedFn = jest.fn(v => v.a);
    const fn = memoize(wrappedFn);
    expect(fn(userA)).toBe(123);
    expect(fn(userB)).toBe(256);
    expect(fn(userA)).toBe(123)
    expect(wrappedFn).toHaveBeenCalledTimes(2);
  });
});