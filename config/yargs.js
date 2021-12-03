
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'es la base de la tabla de multipicar'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'va a ir hasta este numero'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'muestra la tabla con los valores'
                    })
                    .check( (argv, option) => {
                        if( isNaN( argv.b ) ){
                            throw 'la base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;
                    
module.exports = argv;

    