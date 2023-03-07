const colors = require('colors');
const { crearArchivo } = require("./helpers/multiplicar"); //el require me regresa el objeto exportado del otro lado, y lo que hago es hacer desestructuracion de ese objeto
const argv = require('./config/yargs');

console.clear();


// const [ , , arg3 = "base =5"] = process.argv;
// const [ , base = 5] = arg3.split('=');


// const base = 2;

crearArchivo(argv.base , argv.l, argv.h )
    .then( nombreArchivo => console.log(colors.bgMagenta(nombreArchivo, "creado!")))
    .catch(err => console.log(err, "No creado!!"));

