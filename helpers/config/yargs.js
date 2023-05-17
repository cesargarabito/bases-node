const  argv  = require('yargs')
                .options({
                  'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'base de multiplicar'
                  },
                  'h': {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'hasta que numero va a multiplicar'
                  },
                  'l': {
                    alias: 'list',
                    demandOption: false,
                    type: 'boolean',
                    default: false,
                    describe: 'listar la tabla de multiplicar'
                  }
                })
                .check((argv, options) => {
                  if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                  }
                  return true;
                })
                .argv;

                module.exports = argv;