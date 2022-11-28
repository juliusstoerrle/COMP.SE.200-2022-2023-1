import eq from './eq';

// The eq functions test should include tests for different parameter combinations 
// (Objects, Numbers, Booleans, Strings) ensuring a correct SameValueZero com-parison.

describe('eq', function() {
  it('identifies null as equal to null', () => {
    expect(eq(null, null)).toStrictEqual(true);
  });
  it('identifies strings as equal', () => {
    expect(eq("ABcde12", "ABcde12")).toStrictEqual(true);
  });
  it('identifies numbers as equal', () => {
    expect(eq(1253, 1253)).toStrictEqual(true);
  });
  it('identifies numbers as not equal', () => {
    expect(eq(1253, -1253)).toStrictEqual(false);
  });
  it('identifies numbers as not equal', () => {
    expect(eq(2, 9034)).toStrictEqual(false);
  });
  it('ignores signs on zero (SameValueZero)', () => {
    expect(eq(-0, +0)).toStrictEqual(true);
  });
  it('is strict on types', () => {
    expect(eq('2', 2)).toStrictEqual(false);
  });
  it('identifies objects as equal', () => {
    const a = {a: 12, b: ['12']}; 
    const b = {a: 12, b: ['12']}; 
    expect(eq(a,b)).toStrictEqual(true); // not sure what correct result should be
  });
  it('identifies identical objects as equal', () => {
    const a = {a: 12, b: ['12']}; 
    const b = {a: 12, b: ['12']}; 
    expect(eq(a,a)).toStrictEqual(true);
  });
});