import { greet } from "./greet.js";

describe("test for the greet function", () => {
    it("return Hello Coach!"), () => {
const result = greet("Thomas");
expect(result).tobe("Hello Coach!")
    })
    it("return Hello Coach!", () => {
const result = greet("Martin")
 expect(result).toBe("Hello Coach!")
    })
    it("return Hello Coach", () => {
const result = greet("Stefan")
expect(result).toBe("Hello Coach!")
            })
it("return Hello ${name}!", () => {
    const result = greet("Achim")
    expect(result).toBe("Hello Achim!")
                    }) 
it("return Hello stranger!", () => {
    const result = greet("")
    expect(result).toBe("Hello stranger!")
                            })                          
});