const {crearArichivo} = require('./helpers/multiplicar')
const  argv  = require('./config/yargs');
require('colors');

console.clear();


console.log( argv );

crearArichivo(argv.b, argv.l, argv.h) 
.catch(err => console.log(err) );