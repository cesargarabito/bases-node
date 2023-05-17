


const { demandOption, boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./helpers/config/yargs')

console.clear();


// const base = 2;

crearArchivo(argv.b, argv.list, argv.h)
.then(resultado => {
  console.log( resultado);
})
.catch(error => {
  console.error('Error al crear el archivo:', error);
});
;

  