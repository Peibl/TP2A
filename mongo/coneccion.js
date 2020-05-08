const mongoclient = require('mongodb').MongoClient;
const chalk = require('chalk');

const uri = "mongodb+srv://admin:betp2@cluster0-zdy6w.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoclient(uri, {useNewUrlParser:true, useUnifiedTopology:true});

client.connect((err, result) =>{
    if(!err){
        console.log(chalk.blue('Cliente conectado'));
        let collection = result.db("sample_betp2").collection("inventors");
        collection.find().limit(20).toArray((err, result) => {
            console.log(result);
            // insertar un nuevo inventor
            const nuevoInventor = {
                first: "Pedro",
                last: "Perez",
                year: 1987
            }

            collection.insertOne(nuevoInventor, (error, result) => {
                if(!error){
                    console.log(chalk.yellow("Inventor insertado correctamente"));
                    //nuevoInventor.year = 2000;
                    // update de un campo
                    collection.updateOne({last: "Perez"}, {$set: {year: 2000}} , (err, result) => {
                        console.log(chalk.yellow("Inventor actualizado correctamente"));
                        collection.deleteOne({last: "Perez"}, (err, result) => {
                            console.log(chalk.yellow("Inventor eliminado correctamente"));
                        });
                    });
                }
            });
        });
    } else {
        console.log(chalk.red(err));
    }
});
