const fs = require('fs');
require('colors');

const crearArichivo = async( base=23, listar = false, hasta = 10 ) => {

    try {

        let salida  = ''; 
        let consola  = ''; 

        for( let i = 1; i <= hasta; i++) {
          salida += `${ base } x ${ i } = ${base * i}\n`;
          consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${base * i}\n`;
        }

        if (listar){
            console.log('============='.green)
            console.log(`tabla del ${base}:`.blue);
            console.log('============='.green)

            console.log(salida);
    
        }


        fs.writeFileSync(`./salida/tabla-del-${ base }.txt`, salida);

        
    } catch (error) {
        
    }

    
}


module.exports = {
    crearArichivo
}