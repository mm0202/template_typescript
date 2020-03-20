import Sample from "./Sample";

describe("sample tests", () => {
    let sample: Sample;
    beforeEach(() => {
        sample = new Sample();
    })

    test("test1", () => {
        expect(sample.getSuccessMessage()).toBe("success!!")
    })

    test("test2", () => {
        expect(sample.getFailMessage()).toBe("fail!!")
    })
})