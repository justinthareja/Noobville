function houseOfCards (floors) {

	var r = 0;
	var w = 0;

	if (floors < 1 || floors % 1 != 0 || typeof floors != 'number') {
		throw new Error(45);
	}

	for (i = 0; i < floors + 1; i ++) {
		
		r += w;
		w ++;

		for (j = 0; j < w; j++) { r += 2; }	
	}

return r;

}

