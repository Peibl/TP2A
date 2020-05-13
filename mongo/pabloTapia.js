const mongoclient = require('mongodb').MongoClient;
const chalk = require('chalk');

const uri = "mongodb+srv://admin:admin@cluster0-aw4tj.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoclient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let collection;
const CRUD = new Promise((resolve, reject) => {
    resolve(crearConexion());
    reject("error de conexion");
})

CRUD
    .then((result) => {
        return buscarInventors(result);
    })
    .then((result) => {
        return listaInventors()
    })
    .then((inventors) => {
        console.log(inventors);
        return insertarInvertor();
    })
    .then(() => {
        console.log(chalk.green("Inventor insertado"));
        return actualizarInventor();
    })
    .then(() => {
        console.log(chalk.green("Actualizado correctamente"));
        return eliminarInventor();
    })
    .then(() => {
        console.log(chalk.green("Eliminado correctamente"));
    })
    .catch(error => {
        console.log(chalk.red(error));
    }).finally(() => {
        client.close();
        console.log(chalk.blue("Conexion cerrada"));
    }
    )

function eliminarInventor() {
    return new Promise((resolve, reject) => {
        resolve(collection.deleteOne({ last: "Perez" }));
        reject("error al eliminar");
    });
}

function actualizarInventor() {
    return new Promise((resolve, reject) => {
        resolve(collection.updateOne({ last: "Perez" }, { $set: { year: 2000 } }));
        reject("error al actualizar");
    });
}

function insertarInvertor() {
    return new Promise((resolve, reject) => {
        const nuevoInventor = {
            first: "Pedro",
            last: "Perez",
            year: 1987
        };
        resolve(collection.insertOne(nuevoInventor));
        reject("no pudo insertarse el inventor");
    });
}

function listaInventors() {
    return new Promise((resolve, reject) => {
        resolve(collection.find().limit(20).toArray());
        reject("error al listar");
    });
}

function buscarInventors(result) {
    collection = result.db("sample_betp2").collection("inventors");
    console.log(chalk.green("Buscando inventors"));
    return new Promise((resolve, reject) => {
        resolve(collection);
        reject("error al buscar inventors");
    });
}

function crearConexion() {
    console.log(chalk.blue("Abriendo conexion"));
    return client.connect();
}
