// Required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 8080,

	// Your username
	user: 'root',

	// Your password
	password: '',
	database: 'Bamazon'
});

// validateInput ensures user input is a positive number > 0
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole number that is greater than zero.';
	}
}