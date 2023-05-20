//1
const product = 8 * 10;
//2
const quotient = 66 / 33;
//3
let myVar = 87;

// Змініть код лише під цим рядком
myVar++;
//4
let myVar = 11;

// Змініть код лише під цим рядком
myVar--;
//5
const ourDecimal = 5.7;

// Змініть код лише під цим рядком
var myDecimal = 1.1;
//6
const product = 2.0 * 2.5;
//7
const quotient = 4.4 / 2.0; // Змініть цей рядок
//8
const remainder = 11 % 3;
//9
let a = 3;
let b = 17;
let c = 12;

// Змініть код лише під цим рядком
a += 12;
b += 9;
c += 7;
//10
let a = 11;
let b = 9;
let c = 3;

// Змініть код лише під цим рядком
a -= 6;
b -= 15;
c -= 1;
//11
let a = 5;
let b = 12;
let c = 4.6;

// Змініть код лише під цим рядком
a *= 5;
b *= 3;
c *= 10;
//12
let a = 48;
let b = 108;
let c = 33;

// Змініть код лише під цим рядком
a /= 12;
b /= 4;
c /= 11;
//13
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// Змініть цей рядок
//14
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//15
const stringToNumber = function(str){
    var a = str
    a = Number(str);
    return a;
  }
//16
function greet (name, owner) {
    if (name == owner) {
    return "Hello boss";
  }
    return "Hello guest";
}
//17
function makeUpperCase(str) {
    let result = str.toUpperCase();
    return result
  }
//18
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
//19
const myStr = "This is the start" + " " + "This is the end."; // Change this line
//20 
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
//21
onst myName = "Pavel";
const myStr = "My name is " + myName + "and I am well!";
//22
const someAdjective = "My cat is cool";
let myStr = "Learning to code is ";
myStr += someAdjective;
//23
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
//24
let firstLetterOfLastName = "";
const lastName = "Lovelace";


// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
//25
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
//26
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
//27
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
//28
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
//29
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
//30
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myAdjective + " " + myNoun + " really " + myAdverb + " "+  myVerb;// Change this line
// Only change code above this line
//31
// Only change code below this line
const myArray = ["srtoka", 45];
//32
// Only change code below this line
const myArray = [["stroka"],[45,"stroka"]];
//33
const myArray = [50, 60, 70];
var myData = myArray[0];
//34
// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line
//35
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
//36
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog",3])
//37
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();
//38
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();