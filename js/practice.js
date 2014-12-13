// create a function each that takes a collection and a callback as argumnets
// the function will iterate the callback over the collection
// the collection can either be an object or an array

$( '#spongebob' ).load(function () {
	$( '#spongebob').remove();	
})


function each (collection, callback) {

	if (Array.isArray(collection)) {
		for (i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}	
	}
	
	else if (typeof collection === 'object') {
		for (key in collection) {
			callback(collection[key]);
		}
	}
}


// rewrite the native method reduce
// reduce takes a collection and collapses them to a single value
// a single number is returned
// need a result variable to tally the reduce

// reduce([1,2,3,4,5], function(total, value) {return total += value;})
// should return 15

function reduce (collection, callback) {

	var result = 0;

	each(collection, function (element) {
		result = callback(result, element);
	})

	return result;

}


// rewrite the native filter array 

function filter (collection, callback) {

	var result = [];

	each(collection, function (element) {
		if (callback(element)) {
			result.push(element);
		}
	})

	return result;
	
}


/*****SHUFFLE******/

// shuffle([1,2,3,4,5]) // [2,5,1,4,3]

function shuffle (array) {
  // define new empty array
  
  var result = [], index;
  
  // push a randomly generated index of array to the empty array
  
  // iterate this push over the length the array
  
  while(array.length) {
  	index = Math.floor(Math.random() * array.length);
    result = result.concat(array.splice(index, 1));
  }
  
  return result;
  
}

function shuffleInPlace (array) {

  for (i=0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length)
    var replaced = array[randomIndex]
    array[randomIndex] = array[i];
    array[i] = replaced;
  }
    
	return array;
}


// Array.splice(startIndex, numElementsToRemove, replaceValue*)

// var array = [1,2,3,4];
// var slice = array.slice(2);
// var splice = array.splice(1, 1, 'a')

// array = [1,undefined,3,4] [1,'a',3,4]
// splice = [2]
// // slice = [3,4]

// [1,2,3,4].slice(2, 3) // [2]


/*****ONCE******/

function once(fn){

    var innerResult;
    var shouldRun = true;
    
	return function () {
    	
  	if (shouldRun) {
        	shouldRun = false;
            innerResult = fn.apply(null, arguments);
        }
        
    	return innerResult 
    }
}



// var add = function(a,b) {
//   return a + b;
// };

// var addAgain = once(add);
// addAgain = function () {
//   add();
// }
    
// addAgain(3,4) // 7

// Function.apply(context, arrayOfArgs)
// Function.apply(context, [arg1, arg2, ... , argn])

// var addOnce = once(add);

/*****MEMOIZE******/


function memoize(fn) {
	
    results = [];
	
    return function () {
    	
        var args = [].slice.call(arguments);
        resultExists = results.some(function(result){
            return result['arguments'] === args;
        });
        
        if(!resultExists) {
            results.push({
              arguments: args.toString(),
              value: fn.apply(null, args)
            })  
        }
        
        var returnThis;

        results.forEach(function (result) {
            if (result['arguments']) === args) {
                returnThis = result['arguments']
            }
        })

        return returnThis;   
        
    }
}


function memoize (fn) {

  


}



