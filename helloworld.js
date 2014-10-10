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



***********************************************************************
---------------------EASY MODE-----------------------------------------
(1) Write the function printTo100 that prints out the numbers 1 to 100 

(2) Write two functions isEven and isOdd.

These two functions will take in a number and return a boolean. 

isEven will return true if the number is even, false otherwise. 
isOdd will return true if the number is odd, false otherwise. 

Hint: There's a handy operator that will help you with these functions.
************************************************************************/

var printList = function() {
	for (var i = 1; i <= 100; i++)
		console.log(i); //prints the value of i from 1-100 to the console
	}	


var isEven = function (num) {
	if (num % 2 == 0) { 
		return true; //checks the remainder of the argument divided by 2. if the remainder is 0. isEven returns a true boolean 
	} 
	else {
		return false; //if the remainder is not 0. isEven returns a false boolean 
	}
}

var isOdd = function (num) {
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
	




















