import get from './get'
// The get function shall be tested to ensure different levels (1,2,3) and 
// kind (array, object) property paths return the designated property. 

describe('get', () => {
    describe('Simple object tests', () => {
        const obj = { a: 1, b: 3 }
        it('Should return value on corresponing key', () => {
            expect(get(obj, 'a')).toBe(1)
        })
        it('Should return undefined on non existing value', () => {
            expect(get(obj, 'c')).toBe(undefined)
        })
        it('Should return default value if specified path does not exists', () => {
            expect(get(obj, 'c', null)).not.toBe(undefined)
            expect(get(obj, 'c', null)).toBe(null)
            expect(get(obj, 'c', 'not exists')).toBe('not exists')
        })
    })
    describe('Simple array tests', () => {
        const arrStr = ['a', 'b', 'c']
        const arrNmbr = [1, 2, 3]
        it('Should return first element of array on given path (\'[0]\')', () => {
            expect(get(arrNmbr, '[0]')).toBe(1)
            expect(get(arrStr, '[1]')).toBe('b')
        })
        it('Should return \'undefined\' on non existing element', () => {
            expect(get(arrStr, '[3]')).toBe(undefined)
        })
        it('Should return \'null\' on non existing element with default value specified as \'null\'', () => {
            expect(get(arrStr, '[3]', null)).toBe(null)
        })
    })

    describe('Complex object testing with inner array and object', () => {
        const complexObj = {
            str: 'simple string',
            nmbr: 2,
            nestedObj1: { nObjArr: ['a', 'b'], a: 'a', b: 'b' },
            arr1: [1, 2, 3],
            arr2: [{ a: 1, b: 2 }],
            nestedObj2: { obj: { a: 'a', b: 'b' }, arr: [1, 2, 3] }
        }
        it('Should return \'a\' on path \'nestedObj1.a\'', () => {
            expect(get(complexObj, 'nestedObj1.a')).toBe('a')
        })
        it('Should return \'b\' on path \'nestedObj2.obj.b\'', () => {
            expect(get(complexObj, 'nestedObj2.obj.b')).toBe('b')
        })
        it('Should return 1 on path \'arr1[0]\'', () => {
            expect(get(complexObj, 'arr1[0]')).toBe(1)
        })
        it('Should return 2 on path \'arr2[0].b\'', () => {
            expect(get(complexObj, 'arr2[0].b')).toBe(2)
        })
        it('Should return \'undefined\' on path \'nestedObj2.obj.b.b\'', () => {
            expect(get(complexObj, 'nestedObj2.obj.b.b')).toBe(undefined)
        })
        it('Should return \'3\' on path \'nestedObj2.arr[2]\'', () => {
            expect(get(complexObj, 'nestedObj2.arr[2]')).toBe(3)
        })
        it('Should return \'null\' on path \'nestedObj2.arr[3]\'', () => {
            expect(get(complexObj, 'nestedObj2.arr[3]', null)).toBe(null)
        })
        it('Should return \'a\' on path \'nestedObj1.nObjArr[0]\'', () => {
            expect(get(complexObj, 'nestedObj1.nObjArr[0]')).toBe('a')
        })
    })
})