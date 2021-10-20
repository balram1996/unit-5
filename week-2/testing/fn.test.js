
const {sum} = require("./fn.js")

describe("test",()=>{
    test("adding numbers",()=>{
        
        expect(sum(1,1)).toBe(2)
    })
})

describe("basic checks",()=>{
    test("basic data type",()=>{
        expect(1).toBe(1)
    })
})