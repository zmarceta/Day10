function myFunction() {	
	var myMusic = {
		001: {
			artist: "Billy Joel",
			title: "Piano Man",
			release_year: "1973",
			formats: {
				1: "CD",
				2: "8T",
				3: "LP"
			},
			gold: true
		},
		002: {
			artist: "Daft Punk",
			title: "Robot Rock",
			release_year: "2005",
			formats: {
				1: "CD",
				2: "DVD",
				3: "LP",
				4: "DAT"
			},
			gold: false
		}
	}
	return myMusic;
}

console.log(myFunction()[2]);
module.exports = myFunction;