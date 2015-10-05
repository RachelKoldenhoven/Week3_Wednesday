// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.

console.log("Number 1");

function minimum(x, y) {
    if (x < y) {
        console.log(x);
    }
    else if (y < x) {
        console.log(y);
    } else console.log("Error");
}

minimum(6, 4);
minimum(1, 5);
minimum(3, 3);


// 2. Create a new function called minimum3() to find the smallest of three numbers

console.log("Number 2");

function minimum3(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else console.log("Error");
}

minimum3(1, 2, 3);
minimum3(6, 5, 4);
minimum3(3, 1, 2);
minimum3(1, 1, 1);


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.

console.log("Number 3");

var total = 0;
function sum(numbers) {
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}

sum([1, 2, 3, 4, 5, 6]);


// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

console.log("Number 4");

var product = 1;
function multiply(numbers) {
    for (i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    console.log(product);
}

multiply([1, 3, 4, 4, 5]);


// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.

console.log("Number 5");

var words = ["window", "table", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(words) {
    for (i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length >= 6) {
            console.log(word);
        }
    }
}

filterSixPlus(words);


// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.

console.log("Number 6");


function toFahrenheit() {
    var celsius = prompt("Enter a Celsius temperature.");
    console.log(celsius * (9 / 5) + 32);
}

toFahrenheit();

// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

console.log("Number 7");

function tempConversion() {
    var temp = prompt("Enter a temperature");
    var whichWay = prompt("F to C, or C to F?");
    if (whichWay === "F to C") {
        console.log((5 / 9) * (temp - 32));
    } else if (whichWay === "C to F") {
        console.log(temp * (9 / 5) + 32);
    } else (alert("ERROR"));
}

tempConversion();


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
    var totalBs = 0;
    for (i = 0; i < string.length; i++) {
        var letter = string[i];
        if (letter === "B") {
            totalBs += 1;
        }
    }
    console.log(totalBs);
}

countBs("I love Ben and Jerry's Bacon and Blueberry Ice Cream!");


// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

console.log("Number 9");

function countChars(string, x) {
    var totalXs = 0;
    for (i = 0; i < string.length; i++) {
        var letter = string[i];
        if (letter === x) {
            totalXs += 1;
        }
    }
    console.log(totalXs);
}

countChars("I love Ben and Jerry's Bacon and Blueberry Ice Cream!", "a");


// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
var string = "Soon you will master functions!";

console.log("Number 10");

function ohZero(string) {
    var newString = "";
    for (i = 0; i < string.length; i++) {
        var letter = string[i];
        if (letter === "o") {
            letter = "0";
        }
        newString = newString.concat(letter);
    }
    console.log(newString);
}
ohZero(string);


// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"


console.log("Number 11");

function pigLatinSentence(sentence) {
    var words = sentence.split(" ");
    var pgSentence = "";
    for (i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var result = pigLatinWord(currentWord);
        pgSentence = pgSentence.concat(result).concat(" ");
    }
    return pgSentence;
}

function pigLatinWord(word) {
    var firstLetter = word[0];
    if (firstLetter === "a"
        || firstLetter === "e"
        || firstLetter === "i"
        || firstLetter === "o"
        || firstLetter === "u") {
        return word.concat("yay");
    } else {
        var nextLetters = word.substring(1);
        return nextLetters.concat(firstLetter).concat("ay");
    }
}

console.log(pigLatinSentence("Look at my cool function"));

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

console.log("Number 12");

function BofBeer() {
    for (i = 99; i >= 1; i--) {
        console.log(i + " Bottles of beer on the wall, " + i + " bottles of beer!  Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall!");
    }
}

BofBeer();


// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

console.log("Number 13");

var computerNumber = Math.floor(Math.random() * (100 - 1)) + 1;
var userNumber = parseInt(prompt("I'm thinking of a number between 1 and 100.  What is it?"));
while(userNumber !== computerNumber) {
   if (userNumber > computerNumber) {
       userNumber = parseInt(prompt("Too high! Try again!"));
   }
   if (userNumber < computerNumber) {
       userNumber = parseInt(prompt("Too low! Try again!"));
   }
}

if (userNumber === computerNumber) {
    alert("Congratulations! You guessed it!");
}


// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
//Coding is not a performance art.