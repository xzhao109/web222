//The most basic function, a so-called NO OPERATOR function
var noop = function() {
    //no params, empty
}
//square function accepts one paramater, 'n', and returns its value squared
var square = function(n) {
    console.log(n * n);
    return n*n;
}
//add function accepts two parameters, 'a' and 'b', returns their sum
var add = function add(a, b) {
    console.log(a + b);
    return a + b;
}
//noop();
//square(2);
//add(2, 2);
//Parameters and arguments 
//LOG
function log(a, b) {
    //we used the built in arguments object, which is an array of all the arguments passed into the function
    console.log("Arguments length: " + arguments.length, "A: " + a, "B: " + b, "Argument's first element: " + arguments[0]);
}
//log("correct"); //argument has length of 1, first parameter passed is a (which is correct), first argument passed in array is "correct"
//log("also", "correct");
//log("also", "correct", "also", "correct");
//log();
//SUM
/*
function sum() {
    var count = arguments.length; //length of the arguments passed as an array
    var total = 0; //start at 0
    
    for(var i = 0; i < arguments.length; i++) { //for loop to iterate through the array
        total += arguments[i]; //total starts at 0, then we add each i in arguments
    }
    return total;
}
console.log(sum(1)); //1
console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3, 4)); //10*/
//An array is an ordered collection of the same type
function sum(...numbers) { //this function is passing an array of numbers
    var total = 0;
    for(var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sum(1, 2));
*/
//Ternary
/*
function updateScore(currentScore, value, bonus) {
    //Conditional ternary operator - ? :
    var total = bonus ? currentScore + value * bonus : currentScore + value;
    console.log(total);
    return total;
}
updateScore(10, 3); //13
updateScore(10, 3); //13
updateScore(10, 3, 2); //16
function updateScore(currentScore, value, bonus = 1) {
    //See if 'bonus' is truthy (has a value or is undefined) and use it, or default to 2
   // bonus = bonus || 2;
    var total = currentScore + value * bonus;
    console.log(total);
    return total;
}
updateScore(10, 3, 1);
updateScore(10, 3); //default to 2
/*console.log(Math.random() * 6)
console.log(Date.now())
var total = 7;                    // global variable, accessible everywhere
var value = 8;
//Function scope
function add(n) {
     value = total + n;        // local variable, accessible within `add` function only 
    return value;
}
console.log("Total is", total);   // Works, because `total` is in the same scope
console.log("Value is", value);   // `undefined`, since `value` isn't defined in this scope
console.log("New Total", add(16)) // Works, because `add` is defined in the same scope
function f() {
    var y = x + 1;
    var x = 2;
    
    console.log(x);
    console.log(y);
}
f();
var x;
function ff() {
    x = 2;
    return x + 1;
}
console.log(ff());
var x = 1;
//Overriding the value
function parent() {
    var x = 2;
    function child(x) { //nested function -- nested inside parent
        console.log(x);
    }
    child(3); //override 2 to 3
}
parent();
var total = 100;
function increase(n) {
    var total = n + n; //overriding 100 to 100 (50 + 50)
}
increase(50);
console.log(total);
var x = 7;
function f() {
    return x * 2;  // `x` not declared here, JS will look in the parent scope (global)
}
console.log(f());
*/
//Closures
function createAccumulator(value) {
    return function(n) {
        value += n;
        console.log(value);
        return value;
    };
}
var add = createAccumulator(10);
add(1)   // returns 11
add(2)   // returns 13
var add = (function(value) {
    return function(n) {
        value += n;
        return value;
    };
})(10);
add(1)   // returns 11
add(2)   // returns 13