function randomColorGenerator () {
	var r = Math.floor(Math.random() * 255),
		g = Math.floor(Math.random() * 255),
		b = Math.floor(Math.random() * 255);

	return 'rgb(' + r + ',' + g + ',' + b + ')'; 
}

function generateBoard (height, width) {
	var numRows = Math.floor(height / 90);
	var molesPerRow = Math.floor(width / 90);

	console.log("printing", numRows, "rows");
	console.log("printing", molesPerRow, "moles per row");

	for (i = 0; i < numRows; i++) {

		var newRow = $("<div>", {
			class: "row",
			id: "row" + i,
			height: "90px",
			width: width
		});

		$('#field').prepend(newRow);

		for (j = 0; j < molesPerRow; j++) {

			var newMole = $("<img>", {
				class: "mole",
				id: i + "_" + j,
				src: "img/mole.png",
				height: "60px",
				width: "80px"
			});

			var currentRow = "#row" + i;
			// console.log ("printing mole", j, "to row", currentRow);
			$(currentRow).prepend(newMole);
		}
	}
}

generateBoard($(window).height(), $(window).width());

$('#scoreboard').css("backgroundColor", randomColorGenerator);
$('#scoreboard').css("color", randomColorGenerator);
$('#field').css("backgroundColor", randomColorGenerator);


// generate a scoreboard 





// the moles need to be invisible upon generation
// random moles appear over a given intervals
// on click the moles disappear and the score goes up



