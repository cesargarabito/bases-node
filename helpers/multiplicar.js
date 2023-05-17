const fs = require('fs');

const crearArchivo = async (base, l, h) => {
    try {
        let salida = '';

        for (let i = 1; i <= h; i++) {
            let resultado = base * i;
            salida += `${base} x ${i} = ${resultado}\n`;
          }
        
          if (l){
            console.log(salida);
          } else {
            console.log('os meus');
          }
          
        
         fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
          
        
          return `Archivo Tabla-${base}.txt creado exitosamente.`;
    } catch (error) {
        throw error;
    }
   
}

module.exports = {
    crearArchivo
}