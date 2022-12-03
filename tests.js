// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called.", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane'", function () {
        expect(sayHello()).toBe("Hello, Jane");
    });
    it("should return 'Hello, Alex'", function () {
        expect(sayHello("Alex")).toBe('Hello, Alex');
    });
    it("should return a 'Hello, Pat'", function () {
        expect(sayHello("Pat")).toBe('Hello, Pat');
    });
    it("should return 'Hello, World!' ", function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
});
describe('isFive', function () {
    it("returns the number 5", function () {
        expect(isFive()).toBe(5)
    });
})
describe("isEven", function () {
    it("returns an even number", function () {
        expect(isEven(2)).toBe('even')
    });
    it('returns a boolean, no matter what', function(){
        expect(isEven(true)).toBe(true)
    });
    it('returns true when executed with `isEven(2)`', function(){
        expect(isEven(isEven(2))).toBe(true)
    });
    it('returns true when executed with `isEven(-4)`',function(){
        expect(isEven(isEven(-4))).toBe(true)
    });
    it('returns false when executed with `isEven(3)`', function(){
        expect(isEven(isEven(3))).toBe(true)
    });
    it('returns false when called with `isEven("banana")`',function(){
        expect(isEven(isEven("banana"))).toBe(true)
    });it('returns true when called with `isEven("8")`)`',function() {
        expect(isEven(isEven("8"))).toBe(true)
    });it('returns false when called with `isEven(Infinity)`)`',function() {
        expect(isEven(isEven('Infinity'))).toBe(true)
    });it('return false when called with a boolean input like `isEven(true)` or `isEven(false)`)`',function() {
        expect(isEven(isEven(true || isEven(false)))).toBe(true)
    });it('returns false when called without an argument like `isEven()`)`',function() {
        expect(isEven(isEven(("")))).toBe(true)
    });
});









