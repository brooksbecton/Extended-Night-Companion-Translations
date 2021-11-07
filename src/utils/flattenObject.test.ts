import { flattenObject } from "./flattenObject"

describe('flattenObject', () => {
    test("works", () => {
        const result = flattenObject({a: 1, b: { c: 2}})
        const expected = {"a": 1, "b.c": 2}; 

        expect(result).toEqual(expected)
    })
})
