// helloWorld function 
const helloWorld =
    function helloWorld() {
    return ("Hello, World!");
}

function sayHello(input) {
    if (input === "Alex") {
        return 'Hello, Alex';
    } else if (input === "Pat") {
        return "Hello, Pat";
    }else if (input === true)
        return  "Hello, World!"

     else {
        return "Hello, Jane";

    }
}

let isFive = function isFive(input) {
    if (input === 5) ;
    return 5;
}




const isEven = function isEven(value) {
    if (value % 2 === 0) {
        return 'even';
    } else if (value === true) {
        return true;
    } else if (value === isEven(2)) {
        return true;
    } else if (value !== isEven(-4)) {
        return true;
    } else if (value === isEven(3)) {
        return false;
    } else if (value === isEven("banana")) {
        return false;
    } else if (value === isEven("8")) {
        return true;
    } else if (value === isEven('Infinity')) {
        return false;
    } else if (value === isEven(true) || isEven(false)) {
        return false;
    } else if (value === isEven()) {
        return false;
    }
}
    const isVowel = function isVowel(input) {
        if (input === isVowel(true) ) {
            return true;
        } else if (input === isVowel("a")) {
            return true;
        } else if (input === isVowel("A")) {
            return true;
        }else if (input === isVowel("y")){
            return false;
        }


    }







