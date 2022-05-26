//Given r (radius) of a circle, calculate the area of a circle (A = PI * r * r)
var r = 3; 
var area = Math.PI * (r * r);
console.log("1: " + Math.round(area));
//Simulate rolling a dice using random(). 
//The function should allow the caller to specify any number of sides, but default to 6 if no side count is given: 
//roll() (assume 6 sided, return random number between 1 and 6) vs roll(50) (50 sided, return number between 1 and 50)
function rollDice(num = 6) {
    if(num != 6) {
        var rand = Math.floor(Math.random() * (num - 1) + 1);
    } else {
        var rand = Math.floor(Math.random() * (6 - 1) + 1);
    }
    console.log("2: " + rand);
}
rollDice(); //default will be 6
//Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F"
function convert(celcius = 0) {
    if(celcius != 0) {
        var farenheit = (celcius * 1.8) + 32;
    } else {
        var farenheit = 32;
    }
    console.log("3: " + farenheit);
    return farenheit;
}
convert();
//Modify your solution to the previous function to allow a second argument: "F" or "C",
//and use that to determine what the scale of the value is, converting to the opposite: convert(122, "F") should return "50 C".
function convertScale(num, scale) {
    if(scale == "C") {
        //convert to F
        if(num != 0) {
            var farenheit = (num * 1.8) + 32;
        } else {
            var farenheit = 32;
        }
        console.log("4: " + farenheit);
        return farenheit;
    }
    
    if(scale == "F") {
        //convert to C
        if(num != 32) {
            var celcius = (num - 32) / 1.8;
        } else {
            var celcius = 0;
        }
        console.log("4: " + celcius);
     }
}
convertScale(15, "F");
//Function taking any number of arguments (Numbers), 
//returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false.
const isBelowThreshold = (currentValue) => currentValue < 50;
const array1 = [1, 40, 39, 29, 10, 13];
console.log("5: " + array1.every(isBelowThreshold));
//Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6
const array = [11, 2, 6, 4];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("6: " + sum);
//Function allowing any number of arguments of any type, 
//returns true only if none of the arguments is falsy. allExist(true, true, 1) should return true, 
//but allExist(1, "1", 0) should return false.
function allExist(...args) {
    
    const trueArr = [1, "1", true];
    
    const falseArr = [0, false, "0"];
    
    const falseSearch = falseArr[1];
    
    if(args.includes(falseSearch)) {
        return false;
    } else {
        return true;
    }
}
console.log("7: " + allExist(false, "1", 1));
//Function to create a Javascript library name generator: generateName("dog") should "dog.js"
function generateName(name) {
    var generated = name + ".js";
    
    console.log("8: " + generated);
    return generated;
}
generateName("dog");
//Function to check if a number is a multiple of 3 (retruns true or false)
// Modulus %
function test3(x) {
    if (x % 3 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log("9: " + test3(28));

//Check if a number is between two other numbers, being inclusive if the final argument is true: 
//checkBetween(1, 66, 50, true) should return false
//INCLUSIVE - 1 - 66
//EXCLUSIVE - 1(2 - 65)66
function checkBetween(x, y, check, boolean) {
    if(!boolean) {
        //exclusive
        if(check > x && check < y) {
            return true;
        } else {
            return false;
        }
    }
    if(boolean) {
        if(check >= x && check <= y) {
            return true;
        } else {
            return false;
        }
    }
}
//INCLUSIVE IF TRUE - 1 - 50, 300 -> FALSE
console.log("10: " + checkBetween(1, 50, 40, true));
//11. Function to calculate the HST (13%) on a purchase amount
function hst(amount) {
    return amount + (amount * 0.13);
}
console.log("11: " + hst(20.0));
//12. Function to subtract a discount % from a total. If no % is given, return the original value
function discount(amount, perc = 0){
    if(perc == 0) {
        return amount;
    } else {
       return amount - (amount * (perc / 100));   
    }
}
console.log("12: " + discount(4.0)); //Discount is 0%
console.log(discount(4.0, 20.0)); //Discont is 20%
//13. Function that takes a number of seconds as a Number, retuning a String formatted like "X Days, 
//Y Hours, Z minutes" rounded to the nearest minute.
function numOfSecs(seconds) {
    return "Days: " + Math.floor(seconds / 86400) + " Hours: " + Math.floor(seconds / 3600) + " Minutes: " + Math.floor(seconds / 60);
}
console.log("13: " + numOfSecs(4000));
//14. Modify your solution above to only include units that make sense: 
//"1 Minute" vs "3 Hours, 5 Minutes" vs "1 Day, 1 Hour, 56 Minutes" etc
function numOfSecsAdv(seconds) {
    
    var days = Math.floor(seconds / 86400);
    var hours = Math.floor(seconds / 3600);
    var mins = Math.floor(seconds / 60);
    
    var daysShow = false;
    var hoursShow = false;
    var minsShow = false;
    
    //SHOW IF GREATER OR EQUAL TO 1
    if(days >= 1) {
        daysShow = true;
    }
    
    if(hours >= 1) {
        hoursShow = true;
    }
    
    if(mins >= 1) {
        minsShow = true;
    }
    
    if(daysShow && hoursShow && minsShow) {
        //show all
        return "Days: " + days + "Hours: " + hours + "Minutes: " + mins;
    }
    
    if(!daysShow && hoursShow && minsShow) {
        //show hours and mins
        return "Hours: " + hours + " Minutes: " + mins;
    }
    
      if(!daysShow && !hoursShow && minsShow) {
        //show mins
        return "Minutes: " + mins;
    }
}
console.log("14: " + numOfSecsAdv(4000));
//15. Function that takes any number of arguments (Numbers) and returns them in reverse order, 
//concatenated together as a String: flip(1, 2, 3) should return "321"
function flip(...arr) {
    
    var revArr = [];
    
    console.log("15: ");
    
    //Start at the end of the loop
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
        revArr = arr[i];
    }
    
    return revArr;
}
flip(1, 2, 3);
//Function that takes two Numbers and returns their sum as an Integer value 
//(i.e. no decimal portion): intSum(1.6, 3.33333) should 4
function intSum(num1, num2) {
    return Math.floor(num1 + num2);
}
console.log("16: " + intSum(1.6, 3.33333));
//17. Function that returns the number of matches found for the first argument in the remaining arguments: 
//findMatches(66, 1, 345, 66, 67, 66) should return 2
function findMatch(...arr) {
    var count = 0;
    
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] == arr[0]) {
            count++;
        }
    }
    
    return count;
}
console.log("17: " + findMatch(66, 1, 345, 2334, 66, 67, 66));
//18. Function to log all arguments larger than 255: 
//showOutsideByteRange(1, 5, 233, 255, 256,0) should log 256 to the console
function showOutsideByteRange(...arr) {
    console.log("18: ");
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 255) {
            console.log(arr[i]);
        }
    }
}
showOutsideByteRange(1, 5, 233, 255, 256, 0);
//19. Function that takes a String and returns its value properly encoded for use in a URL.
//prepareString("hello world") should return "hello%20world"
function prepareString(str) {
    let result = str.replace(" ", "%20")
    
    return result;
}
console.log("19: " + prepareString("hello world"));