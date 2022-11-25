import chunk from './chunk'

// The chunk function should be tested to ensure all elements 
// of the original array are returned in correctly sized chunks. 

describe('chunk', () => {
    describe('Test simple array', () => {
        it("Should return [['a', 'b'], ['c', 'd']], on input (['a','b', 'c','d'], 2)", () => {
            expect(chunk(['a', 'b', 'c', 'd'], 2)).toBe([['a', 'b'], ['c', 'd']])
        })
        it("Should return [[1, 2], [3, 4]], on input ([1,2,3,4], 2)", () => {
            expect(chunk([1, 2, 3, 4], 2)).toBe([[1, 2], [3, 4]])
        })
    })
});
