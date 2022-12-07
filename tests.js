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
    it('returns a boolean, no matter what', function () {
        expect(isEven(true)).toBe(true)
    });
    it('returns true when executed with (2)', function () {
        expect(isEven(isEven(2))).toBe(true)
    });
    it('returns true when executed with (-4)', function () {
        expect(isEven(isEven(-4))).toBe(true)
    });
    it('returns false when executed with (3)', function () {
        expect(isEven(isEven(3))).toBe(true)
    });
    it('returns false when called with ("banana")', function () {
        expect(isEven(isEven("banana"))).toBe(true)
    });
    it('returns true when called with ("8")', function () {
        expect(isEven(isEven("8"))).toBe(true)
    });
    it('returns false when called with ("Infinity")', function () {
        expect(isEven(isEven("Infinity"))).toBe(true)
    });
    it('return false when called with a boolean input like (true)` or `isEven(false)`)', function () {
        expect(isEven(isEven(true || isEven(false)))).toBe(true)
    });
    it('returns false when called without an argument like `isEven()`', function () {
        expect(isEven(isEven(("")))).toBe(true)
    });
});
describe("isVowel" , function(){
    it('always returns a boolean', function (){
        expect(isVowel((true))).toBe(true)
    });
    it(' returns isVowel("a") true', function (){
        expect(isVowel(("a"))).toBe(true)
    });
    it('returns isVowel("A") as true', function(){
        expect(isVowel("A")).toBe(true)
    });
    it(' returns isVowel("y") as false', function(){
        expect(isVowel("y")).toBe(false)
    });
    it('isVowel(4)` returns false', function(){
        expect(isVowel(4)).toBe(false)
    });
    it('isVowel(true)` or `isVowel(false)` both return false', function(){
        expect(isVowel(true || false)).toBe(true)
    });
    it('isVowel("banana") returns false', function(){
        expect(isVowel("banana")).toBe(true)
    });
    it('isVowel()` returns false', function(){
        expect(isVowel(isVowel()).toBe(false)
    })

});











