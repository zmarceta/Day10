// Only change code above this line
var myPet = {
	species: "Pit bull",
	name: "Johny",
	legs: 4,
	friends: ["Rex", "Gizmo"]
	};

function myFunction(myObj) {
	return myObj;
}

console.log(myFunction(myPet));

// Only change code above this line

module.exports = { myPet, myFunction };