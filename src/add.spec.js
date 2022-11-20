import add from "./add"

// The add function should be tested to ensure that the addition of the provided integers & 
// floating-point numbers provides the mathematically correct result. 

describe('Test suite for "add"-function', () => {
    it('Should return 5 on input 3 and 2', () => {
        expect(add(3, 2)).toBe(5)
    })
    it('Should return 5 on input 3 and 2', () => {
        expect(add(3, '2')).not.toBe(5)
    })
    it('Should return -37 on input 3 and -40', () => {
        expect(add(3, -40)).toBe(-37)
    })
    it('Should return -37.45 on input 3.45 and -40', () => {
        expect(add(3.45, -40)).toBe(-36.55)
    })
});
