var mysql = require("promise-mysql");
var inquirer = require("inquirer");


mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "",
    database: 'bamazonDB'
}).then(function (conn) {

    //do stuff with connection
    var result = conn.query('SELECT * FROM products');
    conn.end();
    return result;

}).then(function (rows) {

    //display database
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].item_id + ") " + rows[i].product_name + " // " + "$" + rows[i].price);
    }

})
    .then(function (rows) {
    start(rows);
}).then(function(conn){
    var newResult = conn.query('SELECT product_name FROM products');

}).then(function(rows){
    console.log(newResult);
});


function start(rows) {
    inquirer

        .prompt([
            {
                name: "buying",
                type: "input",
                message: "What's the ID of the product that you'd like to buy?"
            },
            {
                name: "amount",
                type: "input",
                message: "Great choice! How many would you like?"
            }
        ])
        .then(function (answer) {
            updatingDB(answer);
        })
}

function updatingDB(obj) {
    var buying = (obj.buying);
    var amount = (obj.amount);

    var correct = false;


    console.log(obj);
}