/***********************************************************************************************************
EJS CH. 4 
***********************************************************************************************************/


var journal = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
	Math.sqrt((table[2] + table[3]) *
			  (table[0] + table[1]) *
			  (table[1] + table[3]) *
			  (table[0] + table[2]));
}

function hasEvent(event, entry) {   
	//the "event" argument will be a string that represents one of Jac's daily activities
	//the "entry" argument will be an index of the journal array
  return entry.events.indexOf(event) != -1; 
	//returns a Boolean value. True if the event element can be found within the entry
	//indexOf returns a -1 if the element is not present.
}

function tableFor(event, journal) {
	//the "event" argument is the event to be summarized within the journal
	//the "journal" argument is always the journal array
  var table = [0, 0, 0, 0]; 
	//define a blank array with four elements starting at 0
	//table format = [no event and no squirrel, yes event and no squirrel, no event and yes squirrel, yes event and yes squirrel]
  for (var i = 0; i < journal.length; i++) { //loops through all journal entries 
	var entry = journal[i], index = 0; //defines a variable "entry" to be the journal object at index i. defines a variable "index" to 0
	if (hasEvent(event, entry)) index += 1;  //checks to see if the journal entry at i contains the event argument within any of it's elements. if so, the count has to go up in either table[1] or table[3]
	if (entry.squirrel) index += 2; //checks to see if the squirrel property within the journal entry is true. if so, the count has to go up in either table[2] or table[3]
	table[index] += 1; //adds one to the appropriate spot in the table array
  }
  return table;
}


// function gatherCorrelations(journal) {
//   var phis = {}; //define empty object map
//   for (var entry = 0; entry < journal.length; entry++) { //loops over all journal entries
//     var events = journal[entry].events; //create new variable "events" to extract just the array of events within the journal entry. (excludes the squirrel property) 
//     for (var i = 0; i < events.length; i++) { //loops through all the elements within the events array (all activities within one single day's entry)
//       var event = events[i]; //create a new variable and stores the element at the current index of the loop
//       if (!(event in phis)) //checks for duplicates by using the in operator
//         phis[event] = phi(tableFor(event, journal)); //adds the event as the key and phi as the value into the phis object map
//     }
//   }
//   return phis;
// }

function gatherCorrelations(journal) {
  var phis = {}; //define empty object
  journal.forEach(function(entry) {
	entry.events.forEach(function(event) {
	  if (!(event in phis))
		phis[event] = phi(tableFor(event, journal));
	});
  });
  return phis;
}


var correlations = gatherCorrelations(journal);



// for (var event in correlations) {
//  var correlation = correlations[event];
//  if (correlation > 0.1 || correlation < -0.1)
//      console.log(event + ": " + correlation); //filter out insignificant correlations
// }

 // Array Methods 
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

function remove(array, index) {
  console.log(arguments); //arguments is a special variable that stores all arguments that were used when the function is called
  return array.slice(0, index)
	.concat(array.slice(index + 1));
}

/***********************************************************************************************************
EJS CH. 4 Exercises
***********************************************************************************************************/

// Write a range function that takes two arguments, start and end, 
// and returns an array containing all the numbers from start up to (and including) end. 
// As a bonus assignment, modify your range function to take an optional third argument that indicates 
// the “step” value used to build up the array. If no step is given, the array elements go up by 
// increments of one, corresponding to the old behavior.

function range(start, end, step){ //declare a function that takes two arguments "start" and "end"
	var startToEnd = [] //define an empty array
	if (arguments.length < 3) 
		step = 1;

	if (step > 0) {
		for (i = start; i <= end; i += step) //loop from "start" to "end", with increments of step
			startToEnd.push(i); //inside the loop, push the current index to the array
	}
	else {
		for (i = start; i >= end; i += step)
			startToEnd.push(i); 
	}

	return startToEnd; //return the array after loop
}



// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
// Run the previous program and see whether it does indeed return 55. 

// function sum(array){ //declare a function that takes an array
//  var sum = 0 //define a variable "sum" to keep track of the sum
//  for (i = 0; i < array.length; i++) //loop through the whole array using array.length
//      sum += array[i]; //add each value to sum
//  return sum; //return sum 
// }



// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
// takes an array as argument and produces a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as the
// argument in order to reverse its elements. Neither may use the standard reverse method.

function reverseArray(array) {
	newArray = [];
	for (i = 0; i < array.length; i++) 
		newArray.unshift(array[i]);
	return newArray;
}

function reverseArrayInPlace(array) {
	for (i = 0; i < Math.floor(array.length/2); i++){
		var x = array[array.length - (i+1)];
		array[array.length - (i+1)] = array[i];
		array[i] = x;
	}
	return array;
}

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, 
// and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which 
// takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, 
// which takes a list and a number and returns the element at the given position in the list, or undefined when there 
// is no such element.

var list = {
  value: 1,
  rest: {
	value: 2,
	rest: {
	  value: 3,
	  rest: null
	}
  }
};

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, index) {
  if (index == 0) 
	return list.value;
  else if (index > 0 && list.rest)
	return nth(list.rest, index - 1);
  else
	return undefined;
}

function arrayToList(array) {
  var list = {
	value: array[array.length -1],
	rest: null
  };

  for (var i = array.length - 2; i >= 0 ; i--) {
	list = prepend(array[i], list);
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
	array.push(nth(node,0));  
  }
  return array;
}

// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with 
// the same properties whose values are also equal when compared with a recursive call to deepEqual.
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, 
// you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have 
// to take one silly exception into account: by a historical accident, typeof null also produces "object".



function deepEqual(x, y) {

  var numPropertiesInX = 0, numPropertiesInY = 0;

  if(typeof x == "object" && x != null && 
	 typeof y == "object" && y != null) {
  
	for (var key in x) 
	  numPropertiesInX++;
	for (var key in y) 
	  numPropertiesInY++;

	if (numPropertiesInX === numPropertiesInY) {
	  for (var key in x) {
		if (y[key]) 
		  return deepEqual(x[key], y[key]);
		else 
		  return false;
	  } 
	}
	else 
	  return false;
  }
  else 
	return x === y;
}

// // BOOK SOLUTION
// function deepEqual(a, b) {
//   if (a === b) return true;
  
//   if (a == null || typeof a != "object" ||
//       b == null || typeof b != "object") 
//     return false;
//   // why does deepEqual(null,null) not return false if it meets the a == null condition?

//   var propsInA = 0, propsInB = 0;

//   for (var prop in a)
//     propsInA += 1;

//   for (var prop in b) {
//     propsInB += 1;
//     if (!(prop in a) || !deepEqual(a[prop], b[prop]))
//       return false;
//   }
  
//   return propsInA == propsInB;
// }



/***********************************************************************************************************
Coderbyte Practice Exercises
***********************************************************************************************************/

 function firstReverse(str) {
  var newString = "";
  for (i = str.length - 1; i >= 0; i--)
	newString += str[i];
  return newString;
 }

// Using the JavaScript language, have the function firstFactorial take the num parameter being passed and 
// return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 

function firstFactorial(num) {
  var x = num;
  for (i = num - 1; i > 1; i--) 
	x *= i;
  return x;
}

var array = [1,2,3,4];
var obj = {1:"value = 1", 2:"value = 2", 3:"value = 3", 4:"value = 4"};


for (i=0; i < array.length; i++){
  if (array[i] === 3) {
  }
}
  



/***********************************************************************************************************
Treehouse Prototype Intro
***********************************************************************************************************/

var personPrototype = {
  name: 'Anonymous',
  greet: function (name, mood) {
	  //ensure a valid response if no arguments are given
	  name = name || 'You'; 
	  mood = mood || 'Good';

	  console.log('Hello, ' + name +
				  ' I am ' + this.name +
				  ' and I am in a ' + mood + ' mood!');
  },

  species: 'Homo Sapien'
};

function Person (name) {
  this.name = name;
}

Person.prototype = personPrototype;

justin = new Person('Justin');


var carPrototype = {
  model: "generic",
  currentGear: 0,
  increaseGear: function() {
	this.currentGear ++;
  },
  decreaseGear: function() {
	this.currentGear--;
  } 
}

function Car(model) {
  this.model = model;
}

Car.prototype = carPrototype; //a function's prototype is just an object



/***********************************************************************************************************
EJS Ch. 5
***********************************************************************************************************/

var array = [1, 2, 3];

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// refactor using forEach

// array.forEach(function (element) {
//   console.log(element);
// });




// function gatherCorrelations(journal) {
//   var phis = {}; //define empty object map
//   for (var entry = 0; entry < journal.length; entry++) { //loops over all journal entries
//     var events = journal[entry].events; //create new variable "events" to extract just the array of events within the journal entry. (excludes the squirrel property) 
//     for (var i = 0; i < events.length; i++) { //loops through all the elements within the events array (all activities within one single day's entry)
//       var event = events[i]; //create a new variable and stores the element at the current index of the loop
//       if (!(event in phis)) //checks for duplicates by using the in operator
//         phis[event] = phi(tableFor(event, journal)); //adds the event as the key and phi as the value into the phis object map
//     }
//   }
//   return phis;
// }

// refactor using forEach


function gatherCorrelations (journal) {
  var phis = {};
  journal.forEach(function (entry) {
	entry.events.forEach(function (event) {
	  if (!(event in phis)) { 
		phis[event] = phi(tableFor(event, journal)); 
	  }
	})
  })
  return phis;
}
	

// function that creates a new function
function greaterThan(a) {
  return function(b) {
	return b > a;
  }
}


// function that changes other functions
function noisy(f) {
  return function(arg) {
	console.log("calling with", arg);
	var val = f(arg);
	console.log("called with", arg, "- got", val);
	return val;
  };
}


// function that provides new type of control flow

function unless(test, then) {
  if (!test) {
	then();
  }
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) { 
	body(i);   
  }
}


// repeat(13, function(n) {
//   unless(n % 2, function() {
//     console.log(n, "is even");
//   });
// });


// one iteration of body looks like this:

// body(0) {
//   unless(0 % 2, function (){
//     console.log(n, "is even");
//   })
// }

// within this iteration, unless looks like this:

// if !(0 % 2) // true if n is an even number -- double negative
//   function () {
//     console.log(0, "is even") 
//   }

var myCar = {
  make: "Chrystler",
  model: "Town and Country",
  year: 1996,
  color: "White",
  maxDoorHandles: 5,
  minDoorHandles: 3,
  containsStickers: true,
  inTrunk: "Snow"
}

var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";


// parse the JSON ancestry file into Javascript Object format
var ancestry = JSON.parse(ANCESTRY_FILE); 

// filter the ancestry list for all females
var femaleAncestry = ancestry.filter(function (person) {
  return person.sex === "f"
});

// map all female names in the ancestry data set
var femaleNames = femaleAncestry.map(function (female) {
	return female.name;
})

// use reduce to find the oldest known ancestor
var oldestKnown = ancestry.reduce(function (min, cur) {
	return cur.born < min.born ? cur : min;
})


function average (array) {
	function plus (a, b) {
		return a + b;
	}
	return array.reduce(plus) / array.length
}

function age(p) { return p.died - p.born; }
function male(p) { return p.sex === 'm'; }
function female(p) { return p.sex === 'f';}

// find the average age of males in the ancestry

// var maleAncestry = ancestry.filter(male);
// var maleAge = maleAncestry.map(age);
// var avgMaleAge = average(maleAge);

var avgMaleAge = average(ancestry.filter(male).map(age));
var avgFemaleAge = average(ancestry.filter(female).map(age));

console.log(avgMaleAge);
console.log(avgFemaleAge);

var byName = {};
ancestry.forEach(function (person) {
	byName[person.name] = person;
})




