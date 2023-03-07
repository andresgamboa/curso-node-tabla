const fs = require("fs");
const colors = require('colors/safe');

const crearArchivo = async(base, listar, hasta) =>{

    try {
        
        let salida = '';
        let consola = '';


        for(let x = 1;x <= hasta; x++){
        salida += `${base} x ${x} = ${base*x}\n`;
        consola += `${colors.yellow(base)} ${('x')} ${colors.blue(x)} = ${colors.red(base*x)}\n`;

        }

        if(listar){
            console.log(colors.rainbow("==============="));
            console.log(colors.bgBrightMagenta(" Tabla del :", base));
            console.log(colors.rainbow("==============="));
            console.log(consola);  //Se creo una variable alternativa, para que no genere error a la hora de copiar los datos en el .txt
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

            
        return(`tabla-${base}.txt`);

    } catch (err) {

        throw err;
        
    }


    
        
    
}


module.exports = {  //en este caso estoy exportando un objeto
    crearArchivo  //la propiedad de mi objeto es una funcion, que apunta a crearArchivo, el primero es la funcion, el segundo el objeto se ve algo como function: crearArchivo, o el nombre que yo quiera darle a la funcion, que seria crearArchivo:crearArchivo pero como es redundante por tener el mismo nobmre, node me entiende si solo coloco crearArchivo
}