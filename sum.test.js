const { sum, sum2, hello } = require("./index");

describe("first test suite checking for right total of numbers", () => {
	it("adds 1 + 2 to equal 3", () => {
		expect(sum()).toBe(3);
	});

	it("adds 1 + 2 to equal 3", () => {
		expect(sum2()).toBe(3);
	});
});

describe("second test suite checking that right string is printed out", () => {
	it("string says hello world!", () => {
		expect(hello()).toBe("hello world!");
	});
});
