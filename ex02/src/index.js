// Only change code above this line
var myClothes = {
	hat: "Fedora",
	shirt: "Nike",
	shoes: "Converse"	
	};

function myFunction(myObj) {
	var hatValue = myObj.hat;
	var shirtValue = myObj.shirt;
	var shoesValue = myObj.shoes;
	return {
		hatValue,
		shirtValue,
		shoesValue
	}
}

console.log(myFunction(myClothes));

// Only change code above this line

module.exports = myFunction(myClothes);