// The isDate function should be tested to ensure correct validation 
// of a string date input as required for setting a delivery date.

// The implementation is platform dependent, therefore this test was 
// expanded to ensure all paths are mocked
// this requires esetting the module mocjs before each test
beforeEach(() => {
  jest.resetModules();
});

// As tests are generally executed in node.js, the node helpers need
// to be removed to test the browser side test path.
function mockNodeTypes() {
  jest.doMock('../src/.internal/nodeTypes.js', () => {
    return {
      __esModule: true,
      isDate: false,
    };
  });
}

describe('isDate', function() {
  describe('in node.js', () => {
    // node.js includes certain helpers to identify types, these are 
    // executed by default when executing the tests in node.js as its 
    // the projects standard

    it('accepts Date object', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default(new Date())).toBe(true);
      });
    });

    it('accepts Date object with lower boundary', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default(new Date(Date.UTC(1970,1,1,0,0,0,0)))).toBe(true);
      });
    });

    it('returns false on null', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default(null)).toBe(false);
      });
    });

    it('returns false on date string', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default('2022-10-18')).toBe(false);
      });
    });

    it('returns false on unrelated object', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default({value:'2022-10-18'})).toBe(false);
      });
    });
  });

  describe('in browser', () => {
    // This path executes the test while removing the node.js included helpers
    
    it('accepts Date object', () => {
      mockNodeTypes();
      return import('../src/isDate').then(isDate => {
        expect(isDate.default(new Date())).toBe(true);
      });
    });

    it('accepts Date object with lower boundary', () => {
      mockNodeTypes();
      return import('../src/isDate').then(isDate => {
        expect(isDate.default(new Date(Date.UTC(1970,1,1,0,0,0,0)))).toBe(true);
      });
    });
    
    it('returns false on null', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default(null)).toBe(false);
      });
    });

    it('returns false on date string', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default('2022-10-18')).toBe(false);
      });
    });

    it('returns false on unrelated object', () => {
      return import('../src/isDate').then(isDate => {
        expect(isDate.default({value:'2022-10-18'})).toBe(false);
      });
    });
  });
});