import capitalize from "./capitalize"


describe('Test suite for "capitalize" funtion', () => {
    it('Should convert "hello" to "Hello"', () => { expect(capitalize('hello')).toBe('Hello') })
    it('Should apply only to first word if passed several words', () => {
        expect(capitalize('several words written')).toBe('Several words written')
    })
    describe('Testing string with non-letter characters', () => {
        it('Should leave "-hello" as without changing"', () => {
            expect(capitalize('-hello')).toBe('-hello')
        })
        it('Should leave "-_?" as it is', () => {
            expect(capitalize('-_?')).toBe('-_?')
        })
        it('Should leave "/\fs" as it is', () => {
            expect(capitalize('/\fs')).toBe('/\fs')
        })

    })
})
