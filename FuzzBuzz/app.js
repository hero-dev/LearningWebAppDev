var main = function () {
	"use strict";

	for (var i = 1; i <= 100; i++) {
		if ((i%3 === 0) && !(i%5 === 0)) {
			console.log("%3 Fuzz " + i);
		} else if ((i%5 === 0) && !(i%3 === 0)) {
			console.log("%5 Buzz " + i);
		} else if ((i%3 === 0) && (i%5 === 0)) {
			console.log("%15 FUZZBUZZ " + i);
		} else {console.log(i)}
	};
};

$(document).ready(main);