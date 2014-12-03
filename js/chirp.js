// changes h1 text to 'where to?'

// jQuery(document).ready(function () {
// 	$('h1').text('Welcome to Chefland')
// })

// changes background of the header ID to an rgb color 

// $('#header').css('background-color', 'rgb(222,222,222)') 


// function to generate a random color

function randomColorGenerator () {
	var r = Math.floor(Math.random() * 255),
		g = Math.floor(Math.random() * 255),
		b = Math.floor(Math.random() * 255);

	return 'rgb(' + r + ',' + g + ',' + b + ')'; 
}

// changes background of header ID to a random color

// $('#header').mousemove(function (event) {
// 	$('#header').css('background-color', randomColorGenerator) 
// })

$('#pew').mousedown(function () {
	$('#wrapper').css('background-color', randomColorGenerator)
	$('#wrapper').css('color', randomColorGenerator) 
})