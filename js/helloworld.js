/***********************************************************************
IF STATEMENT REVIEW
************************************************************************

console.log("hello from flaky.js");

var a = 2;
var b = 6;

if (a<b) {
	console.log("if block")
} else {
	console.log("else block")
};



***********************************************************************
FOR LOOP REVIEW - FIZZBUZZ CHALLENGE

For Loop syntax notes:

for(initializer;condition;reoccuring statement) {}

initializer = statement that is set before checking the condition
condition = statement to be evaluated
reoccuring statement = action run after the condition is evaluated
***********************************************************************

for (var i = 1; i <= 100; i++) {
	if (i % 15 == 0) {
		console.log("fizzbuzz");
	} else if (i % 5 == 0) {
		console.log("buzz");
	} else if (i % 3 == 0) {
		console.log("fizz");
	} else {
		console.log(i);
	}
}


for (var counter=100; counter >= 1; counter--) {

    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("fizzbuzz");
    }

    else if (counter % 5 == 0) {
        console.log("buzz");
    }

    else if (counter % 3 == 0) {
        console.log("fizz");
    }

    else { 
    	console.log(counter);
    }
}

 for (var number = 100; number; number--) {

	if (number % 15 == 0) {
	    console.log("fizzbuzz");
	}

	else if (number % 5 == 0) {
	    console.log("fizz");
	}

	else if (number % 3 == 0) {
	    console.log("buzz");
	}

	else {
	    console.log(number);
	}




for (var i = 100; i; i--) {
 	if (i % 5 == 0) {
 		if (i % 3 == 0) {
 			console.log("fizzbuzz");
 		} 

 		else {
			console.log("buzz");
 		}	
 	if (i % 3 == 0) {
 			console.log("fizz");
 		}
	console.log(i); 
	}
}

//optimal solution:

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}



***********************************************************************
INTRODUCTION TO FUNCTIONS
***********************************************************************

var sayHello = function() {
	var message = "Hello";
	message = message + "World!";
	console.log(message);
}

var debug = function (message) {
	console.log("Debug", message);
}

var doubleNumber = function (num) {
	//num = num * 2;
	//return num;
	return num * 2;
}

sayHello();

var x = 1;
debug("x has been set");

sayHello();

x += 10;
var y = 100;
debug("x has been increased, y has been set");

sayHello();



/***********************************************************************
INTRODUCTION TO ARRAYS/OBJECTS
************************************************************************

var friends = ["Luke", "Scott", "Dan", "Stape", [8 , true, null]]; //can capture different types of elements within the same array (even other arrays)
console.log(friends);
console.log(friends.length); //length calculates total number of values in the array
console.log(friends[0]); // returns "Luke", always start counting from 0
console.log(friends[10]); //returns "undefined"

var friendNumber = 1;
console.log(friends[friendNumber]); //returns "Scott"

for(var i = 0; i < friends.length; i++) { //index in loop is always going to be less than length
	console.log(friends[i]);
}


var me = {
	first_name: "Justin", //first_name = property "Justin" = key
	last_name: "Thareja",
	"Employee Number": 1 
}

console["log"](me);
console.log(me.first_name);
console.log(me["last_name"]); //square brackets known as "subscript"
console.log(me["Employee Number"]);

me.first_name = "Dan" //can change values/keys outside the object literal

var key = "first_name"
console.log(me[key]) //dynamic retreival using a variable 
*/

/***********************************************************************
---------------------EASY MODE-----------------------------------------
(1) Write the function printTo100 that prints out the numbers 1 to 100 

(2) Write two functions isEven and isOdd.

These two functions will take in a number and return a boolean. 

isEven will return true if the number is even, false otherwise. 
isOdd will return true if the number is odd, false otherwise. 

Hint: There's a handy operator that will help you with these functions.
************************************************************************

var printList = function() {
	for (var i = 1; i <= 100; i++) {
		console.log(i); //prints the value of i from 1-100 to the console
	}	
}

var isEven = function(num) {
	if (num % 2 == 0) { 
		return true; //checks the remainder of the argument divided by 2. if the remainder is 0. isEven returns a true boolean 
	} 
	else {
		return false; //if the remainder is not 0. isEven returns a false boolean 
	}
}

var isOdd = function(num) {
	if (num % 2 !== 0) { 
		return true; //checks the remainder of the argument divided by 2. if the remainder is not 0, isOdd returns a true boolean
	} 
	else {
		return false; //if the remainder is 0, the num argument is even therefore isOdd returns a false boolean
	}
}



/***********************************************************************
-------------------NORMAL MODE------------------------------------------
Write the function promptOddEven. 

This function will prompt a user to input a number, and will keep 
prompting until the user enters an odd number.

Once the user enters an odd number, it will keep prompting the user 
until they enter an even number. 

After both numbers have been entered, return the sum. 

Try to reuse isOdd and isEven here
************************************************************************

var promptOddEven = function() {
	var oddNum = parseInt(window.prompt("Enter an odd number", 0)); //prompt by default returns a string. parseInt parses the string into an integer to sum later.
	console.log("First odd attempt " + oddNum);

		while(isEven(oddNum)) { //The while loop will run until isEven returns false boolean
			var oddNum = parseInt(window.prompt("Sorry, that's not an odd number. Please enter an odd number"));
			console.log("Next odd attempt " + oddNum);
		}
	
	console.log("oddNum = " + oddNum);

	var evenNum = parseInt(window.prompt("Enter an even number", 0));
	console.log("First even attempt " + evenNum);

		while(isOdd(evenNum)) { //The while loop will run until isOdd returns a false boolean 
			var evenNum = parseInt(window.prompt("Sorry, that's not an even number. Please enter an even number"));
			console.log("Next even attempt " + evenNum);
		}
	
	console.log("evenNum = " + evenNum);
	
	return oddNum + evenNum; //returns the sum of oddNum and evenNum defined by the prompts earlier.
}



/***********************************************************************
-------------------HARD MODE------------------------------------------
Write the function rockPaperScissors. 

The function will take a string as it's only argument, 
either 'rock', 'paper', or 'scissors'. 

Inside the function there will be a computer's hand that is a randomly 
generated string either 'rock', 'paper', 'scissors'. 

Compare the user's hand with the computers and console.log the results.
************************************************************************

var outcomes = ["Rock", "Paper", "Scissors"]; //define an array of all outcomes that can get thrown

var objects = { //converts the array values into an object called "objects" to more easily identify outcomes
	Rock: outcomes[0], //"Rock" can now be called by objects.Rock OR objects[Rock]
	Paper: outcomes[1], //"Paper" can now be called by objects.Paper OR objects[Paper]
	Scissors: outcomes[2] //"Scissors" can now be called by objects.Scissors OR objects[Scissors]
};

var responses = { //condense responses into an object to not repeat
	WIN: 'You Win', //responses.WIN = the string 'You Win'
	LOSE: 'You Lose', //responses.LOSE = the string 'You Lose'
	TIE: 'Throw Again' //responses.TIE = the string 'Throw Again'
}

var reply = function(outcome){ 
	if(typeof outcome !== 'string'){ //check to make sure the data coming into a function is a string as you expect
		console.log('output error'); //output error
	} else{
		console.log(outcome); //outputs outcome to the log 
	}
}


var calculateWinningHand = function(userHand,computerHand) {

	console.log("your hand is " + userHand);
	console.log("computer's hand is " + computerHand);
	
	if(userHand === computerHand){ //check for tie first
		reply(responses.TIE); //output 'Throw Again' to console.log
	}
	else if (userHand === objects.Rock) { //check that the user has rock
		if (computerHand === objects.Paper) { //check that the computer has paper
			reply(responses.LOSE); //paper beats rock, user loses
		}
		else {
			reply(responses.WIN); //rock beats scissors, user wins
		}
	}
	else if (userHand === objects.Paper) { //check that the user has paper
		if (computerHand === objects.Scissors) { //check that the computer has rock
			reply(responses.LOSE); //scissors beats paper, user loses 
		}
		else {
			reply(responses.WIN); //paper beats rock, user wins
		}
	}
	else if (userHand === objects.Scissors) { //check that the user has scissors
		if (computerHand === objects.Rock) { //check that the computer has rock
			reply(responses.LOSE); //rock beats scissors, user loses
		}
		else {
			reply(responses.WIN); //scissors beats paper, user wins
		}
	}	
	else{
		console.log('Invalid input -- Please choose either Rock, Paper or Scissors'); //the value entered does not match any value in the outcomes array
		rockPaperScissors();
	}
}


function generateComputerHand(){
	var randomIndex = Math.round(Math.random() * (outcomes.length - 1));
	//Math.random() * (outcomes.length - 1) will return a random number between [0,2] 
	//Applying Math.round() to that random number will then round it to an integer, which represents either "Rock", "Paper", or "Scissors"
	return outcomes[randomIndex];
}

var rockPaperScissors = function() {
	var computerHand = generateComputerHand(); //defines computer's hand
	var userHand = window.prompt("Rock, Paper or Scissors?", "Paper"); //prompt for user's hand

	calculateWinningHand(userHand,computerHand); 
}

/************************************************************************
EJS LOOP PRACTICE 
************************************************************************
var symbolPyramid = function(symbol) {
	
//	do {
//		var output = prompt("Enter a single character", "#");
//	} while (output.length != 1);
//	output = symbol;
//
//	for(i = 0; i < 8; i++) {
//		console.log(output);
//		output +=  symbol;
//	}

for(line = symbol; line.length < 8; line += symbol)
	console.log(line);
}


var chessBoard = function(size){
	var linePrint = "";	
	for(height = 1; height <= size; height++){
		for (width = 1; width <= size; width++){
			if((width + height) % 2 === 0)
				linePrint += "#";
			else
				linePrint += (" ");
		}
	linePrint += "\n"
	}
console.log(linePrint);	
}

/************************************************************************
EJS FUNCTION PRACTICE 
************************************************************************


var min = function(num1,num2) {
	if(num1 < num2)
		return num1;
	else
		return num2;
}



var isEven = function(x) {
	if(x == 0) 
		return true;
	else if(x == 1) 
		return false;		
	else if(x > 0) 
		return isEven(x - 2);	//intro to recursion
	else 
		return isEven(x + 2);
			
}


var countChar = function(string,targetChar) { 
	var count = 0

	for(i = 0; i < string.length; i++) {
		if(string.charAt(i) == targetChar)
			count ++;
	}
	return count;	
}


var countBs = function(string) {
	return countChar(string,"B");	
}



/************************************************************************
TREEHOUSE JS VARIABLE REVIEW 

scope: javascript only has function scope and NOT block scope
shadowing: a local variable initialized within a function can have the same name and yet will not effect the global value
		   an undeclared variable assigned a value within a function is created as a global variable
hoisting: var declarations get hoisted to the top of the function when declared within the function scope
          functions defined with declaration notation get hoisted to the top of their scope as well.
************************************************************************/



/************************************************************************
TREEHOUSE ARRAY REVIEW
*************************************************************************

//index always starts with 0
//other notation: var myArray = new array(array.length);
//should primarily use object literal: myArray = [];

//Some handy Methods:

myArray = [1,2,3,4,5,6];
console.log(myArray.toString());

myArray.pop(); //removes and returns a value off the end of the array 
console.log(myArray.toString());

myArray.push(7);//adds the value '7' to the right hand of the array
console.log(myArray.toString());

myArray.shift();//shift is similar to pop but for the beginning of the array
console.log(myArray.toString());

myArray.unshift(0);//Unshift is similar to pUsh but for the beginning of the array (u's ride together and die together)
console.log(myArray.toString());

 

myArray = [1, 12, 100, 23, 2, 35, 336, 3339, 8];
// myArray.reverse(); // reverses the elements within the array 

myArray.sort(function(a,b){ //by default, the .sort will assume all values are strings. 
	return a - b; //for any other comparison, an anon function must be written that returns a value with the following criteria when evaluating the elements within the array:
});				  //if the value is positive, a is placed before b 
				  //if the value is negative, a is placed after b
				  //if the value is 0, a and b are treated as the same

console.log(myArray.toString());


myArray = [0, 1, 2, 3, 4, 5, 6];

myArray.splice(2, 0, 'two');
//splice formatting: myArray.splice(index, removes x number of values, inserted at index) 

var arrayEmpty = [];
var arrayContents = ["A", "B", "C", "D", "E"];

for (var i = 0; i < 5; i++)
	arrayEmpty.push(arrayContents[i]);

var myString = arrayEmpty.join("");

*/

/************************************************************************
Homework:

1) Write a function that takes a matrix (2D array) as it's only 
argument and returns a new 2D array that multiplies each number in 
the matrix by two. After this, extend the function to allow any 
multiplier to be passed in as the second argument to the function.
**************************************************************************

var matrix = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];


var multiplyThis = function(matrix, multiplier) {
	for (var i = matrix.length - 1; i >= 0; i--) {
		for (var j = matrix.length - 1; j >= 0; j--) {
			matrix[i][j] *= multiplier;
		};
	};

	return matrix;
}

/************************************************************************
Treehouse Objects + Methods Review
*************************************************************************/

//{key: value}; series of keys and values we can assign to and read from
//anything that's a valid variable name, you can leave the quotes off the key
//dot notation vs. square bracket notation


//justin.lastName = "Dan"; //DOT NOTATION also works for setting
//justin.lastName //DOT NOTATION returns the value assigned to the key lastName within the object justin

//justin["favorite color"] = "green" //SQUARE BRACKET NOTATION is used with keys that have spaces
//justin["favorite color"]; //SQUARE BRACKET NOTATION

//A Method is a function that is a property of an object

var genericGreet = function() {
	return "Hello I am " + this.firstName + " " + this.lastName;
}

var justin = {
	firstName: "Justin",
	lastName: "Thareja",
	skills: ["surfing", "snowboarding", "Javascript"],
	"favorite color": "blue",
	greet: genericGreet
};

var coggers = {
	firstName: "Katie",
	lastName: "Johnston",
	skills: ["active listening", "crisis management", "qualitative research"],
	favoriteColor: "purple",
	greet: genericGreet
};


//explanation in english
//created coggers as an object with certain properties
//each property within the coggers object has a specific key: value pair
//each value is recognized by calling (right term?) the associated key
//if a value within an object is a function, its known as a method
//the greet method will call the genericGreet function which returns a string including values this.firstName and this.lastName
//since 'this' is defined right before the method, in this case 'this' = coggers
//so the coggers.greet() will return "Hello I am Katie Johnston"

   var genericGreet = function(name, mood) {
        name = name || "you";
        mood = mood || "good";
        return "Hello " + name + ", my name is " + this.name +
          " and I am in a " + mood + " mood!";
      }
      
      var andrew = {
        name: "Andrew"
      }
      
      var args1 = ["Michael", "awesome", ":)"];

      var greeting = genericGreet;














