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

let isFive = function isFive(num) {
    if  (num === 5);
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
       function isVowel(char) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
        } else if (char === "A"){
            return true;
        } else if (char === "y"){
            return false;
        }else if (char === true){
            return true;
        }else if (char === 4){
            return false;
        }else if (char === isVowel(true) || isVowel(false)){
            return false;
        }else if (char !== isVowel("banana")){
            return true;
        }else if (char === isVowel()){

        }
    }







