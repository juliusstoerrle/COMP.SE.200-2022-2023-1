import chunk from './chunk'

// The chunk function should be tested to ensure all elements 
// of the original array are returned in correctly sized chunks. 

describe('Test suite for "chunk"-function', () => {
    describe('Test simple array', () => {
        // const arr = ['a', 'b']
        it("Should return [['a', 'b'], ['c', 'd']], on input (['a','b', 'c','d'], 2)", () => {
            console.log(chunk(['a', 'b', 'c', 'd'], 2));
            expect(chunk(['a', 'b', 'c', 'd'], 2)).toBe([['a', 'b'], ['c', 'd']])
        })
    })
});
