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
************************************************************************/

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
************************************************************************/

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
************************************************************************/

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
************************************************************************/
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






