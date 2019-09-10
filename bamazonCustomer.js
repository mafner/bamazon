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