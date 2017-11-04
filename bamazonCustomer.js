var mysql = require("mysql");
var inquirer = require("inquirer");


//create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //your username
    user: "root",

    //your password
    password: "",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    afterConnection();
});


function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        displayDB();
        start();
        connection.end();
    });
}

function displayDB(){
    var query = "SELECT * FROM products";

    connection.query(query, function (err,res) {
        for (var i = 0; i < res.length; i++){
            console.log(res[i].item_id + ") " + res[i].product_name + " // " + "$" +res[i].price);
        }
    });
}

function start(){
    inquirer
        .prompt([
            {
                name: "buying",
                type: "input",
                message: "What's the ID of the product that you'd like to buy?\n"
            },
            {
                name: "amount",
                type: "input",
                message: "Great choice! How many would you like?"
            }
        ])
        .then(function(response){

    })
}

