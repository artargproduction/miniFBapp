var database = [
	{
		username: "artis",
		password: "supersecret"
	},
	{
		username: "dace",
		password: "123"
	},
	{
		username: "janis",
		password: "777"
	}

];

var newsFeed = [
	{
		username: "Monta",
		timeline: "Man ir garlaicīgi!"
	},
	{
		username: "Eliza",
		timeline: "Gribu spēlēties!!!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
} 

function signIn(username, password) {	
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);