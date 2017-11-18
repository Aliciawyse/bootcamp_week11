var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "",
    database: 'bamazonDB'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connection successfull');
    makeTable();
});

function makeTable(){
    connection.query("SELECT * FROM products", function(err, res){

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + ") " + res[i].product_name + " // " + "$" + res[i].price + " // Quantity:" + res[i].stock_quantity);
        }

        //console.log(res);
        promptCustomer(res);
    })
}

//take response from connection query so that the products can be chosen by user
function promptCustomer(res){

    inquirer.prompt([{

        type:'input',
        name: 'choice',
        message: 'Please type the item that you want to purchase'}])

        .then(function(answer){

            //console.log(answer);
            var correct = false;

            for (var i=0;i<res.length; i++){

                //console.log(res[i].product_name);

                if (res[i].product_name == answer.choice){
                    correct = true;
                    var product = answer.choice;
                    var id = i;

                    inquirer.prompt({
                       type: 'input',
                       name: 'quant',
                       message: 'How many would you like to buy'
                       // validate: function(value){
                       //     if(isNAN(value)==false){
                       //         return true;
                       //     } else {
                       //         return false;
                       //     }
                       // }
                    }).then(function(answer){
                        //console.log(res[id].stock_quantity);
                        //console.log(typeof res[id].stock_quantity);
                        //console.log(answer.quant);

                        if((res[id].stock_quantity - answer.quant) > 0){

                            connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - answer.quant) + "' WHERE product_name='" + product + "'", function(err, res2){
                                console.log("Product Bought");
                                makeTable();
                            })
                        }else {
                            console.log("Not a valid selection");
                            promptCustomer(res);
                        }
                    })
                }
            }
        })
}
