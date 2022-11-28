import memoize from './memoize';

function getA(user) {
  return user.a;
}

function getUsername(user) {
  return user.username;
}

describe('memoize', function() {
  it('caches values with resolver', () => {
    const wrappedFn = jest.fn(getA);
    const userA = {username: 'JaneDoe', a:123};
    const userB = {username: 'Max', a:256};
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
  // TODO missing error case, replace cache implementation
});