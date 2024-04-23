import { expect, test } from "@jest/globals";

describe("Demo test", () => {

    it("should pass 1", () => {

        let x = 10;
        let y = 20;
        expect(x + y).toBe(30);

    })

    test("should pass 2", () => {

        let x = 10;
        let y = 20;
        expect(x - y).toBe(-10);
    })

})