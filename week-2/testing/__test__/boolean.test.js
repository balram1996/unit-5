const { expect } = require("@jest/globals")

describe("boolean checks",()=>{
    test("true false",()=>{
        expect(true).toBeTruthy()
        expect(false).toBeFalsy()
        expect(5).not.toBeNaN()
    })
})