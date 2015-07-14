// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


var colors = new Array("yellow", "pink", "magenta", "cyan", "violet")
//                         0        1        2         3        4	
	for (var i = 0; i < colors.length; i++) {

		console.log("My first selection is " + colors[0])
}


var presidents = new Array("Obama", "Harper", "Putin", "Kennedy", "Nixon")
//                           0        1        2         3        4	
	for (var i = 0; i < presidents.length; i++) {

		console.log("My (i + 1)st selection is " + presidents[i])
}