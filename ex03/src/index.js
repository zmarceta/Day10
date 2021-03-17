// Only change code above this line
var myFood = {
	vegetable: "carrot",
	fruit: "orange",
	drink: "water"	
	};

function myFunction(myObj) {
	var vegetableValue = myObj["vegetable"];
	var fruitValue = myObj["fruit"];
	var drinkValue = myObj["drink"];
	return {
		vegetableValue,
		fruitValue,
		drinkValue
	}
}

console.log(myFunction(myFood));

// Only change code above this line

module.exports = myFunction(myFood);