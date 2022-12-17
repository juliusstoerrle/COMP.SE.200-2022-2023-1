import capitalize from "../src/capitalize"


describe('capitalize', () => {
    it('Should convert "hello" to "Hello"', () => { expect(capitalize('hello')).toBe('Hello') })
    it('Should capitalize scandinavian letters', () => {
        expect(capitalize('ääkkönen')).toBe('Ääkkönen')
        expect(capitalize('ökytalo')).toBe('Ökytalo')
        expect(capitalize('öljynkerÄysAlus')).toBe('Öljynkeräysalus')
    })
    it('Should apply only to first word if passed several words', () => {
        expect(capitalize('several words written')).toBe('Several words written')
    })
    describe('Strings starting with with special characters', () => {
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
