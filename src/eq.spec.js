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

  it('evaluates NaN against NaN as equal', () => {
    expect(NaN == NaN).toStrictEqual(false);
    expect(eq(NaN, NaN)).toStrictEqual(true);
  });

  describe('with numbers', () => {
    it('identifies equality', () => {
      expect(eq(1253, 1253)).toStrictEqual(true);
    });

    it('identifies sign difference', () => {
      expect(eq(1253, -1253)).toStrictEqual(false);
    });

    it('identifies difference', () => {
      expect(eq(2, 9034)).toStrictEqual(false);
    });
    
    it('ignores signs on zero (SameValueZero)', () => {
      expect(eq(-0, +0)).toStrictEqual(true);
    });
  });


  describe('with objects', () => {
    it('identifies identical as equal', () => {
      const a = {a: 12, b: ['12']};
      const b = a;
      expect(eq(a,b)).toStrictEqual(true);
    });

    it('identifies copy as not equal (is identity based)', () => {
      const a = {a: 12, b: ['12']}; 
      const b = {...a}; 
      expect(eq(a,b)).toStrictEqual(false); // not sure what correct result should be
    });
  });

  it('is strict on types', () => {
    expect(eq('2', 2)).toStrictEqual(false);
  });
});