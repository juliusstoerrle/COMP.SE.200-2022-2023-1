import isEmpty from './isEmpty';
// The tests for the isEmpty function must include checks for null, 
// objects, collection, map, or set each of which shall return true 
// if size or length respectively return 0 or contain no properties.  

describe('Test suite for "isEmpty" function', () => {
  it('Should return true for null - value', () => {
    expect(isEmpty(null)).toBe(true);
  });
  it('Should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });
  it('Should return false for any string with length >= 1 (dash "-")', () => {
    expect(isEmpty('-')).toBe(false);
  });
  it('Should return false for any string with length >= 1 (space " "', () => {
    expect(isEmpty(' ')).toBe(false);
  });
  it('Should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });
  it('Should return false for array with numbers', () => {
    expect(isEmpty([1])).toBe(false);
  });
  it('Should return false for array with strings', () => {
    expect(isEmpty(['a1'])).toBe(false);
  });
  it('Should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });
  it('Should return false for non-empty object where only value is empty string', () => {
    expect(isEmpty({ key: '' })).toBe(false);
  });
  it('Should return false for non-empty object where only value is null', () => {
    expect(isEmpty({ key: null })).toBe(false);
  });
  it('Should return false for non-empty object where only value empty object', () => {
    expect(isEmpty({ key: {} })).toBe(false);
  });
  it('Should return true for boolean values (false)', () => {
    expect(isEmpty(false)).toBe(true);
  });
  it('Should return true for boolean values (true)', () => {
    expect(isEmpty(true)).toBe(true);
  });

  describe('Test for Map and Set collections', () => {
    const sampleSet = new Set()
    const sampleMap = new Map()
    sampleMap.set('a', 'a1')
    sampleMap.set('b', 'b1')

    sampleSet.add(1)
    sampleSet.add('a')
    it('Should return false on non-empty Set', () => {
      expect(isEmpty(sampleSet)).toBe(false)
    })
    it('Should return true on empty Set', () => {
      sampleSet.clear()
      expect(isEmpty(sampleSet)).toBe(true)
    })
    it('Should return false for non-empty Map', () => {
      expect(isEmpty(sampleMap)).toBe(false)
    })
    it('Should return true for empty Map', () => {
      sampleMap.clear()
      expect(isEmpty(sampleMap)).toBe(true)
    })

  })
  describe('Prototype tests', () => {
    function Foo() { }
    function Bar() { }
    Bar.prototype = Object.create(Foo.prototype)
    it('Should return false on empty prototype', () => {
      expect(isEmpty(new Bar())).toBe(false)
    })
  });


})
