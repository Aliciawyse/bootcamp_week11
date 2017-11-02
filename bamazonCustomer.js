var mysql = require("mysql");

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
    console.log("Connected as ID " + connection.threadID + "\n");
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
