             //fs callbacks

//Funciona muy similar a las operaciones síncronas. Sólo que al final recibirán un último argumento, que como podemos intuir, debe ser un callback.
//el manejo por callbacks es totalmente asíncrono.

const { writeFile, appendFile, readFile, unlink } = require('fs');

const nombreArchivo = 'mejoresAlumnos-callback.txt'
//writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe. Al sólo escribir, su callback sólo maneja: (error)=>
//appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!, al sólo ser escritura, su callback sólo maneja: (error)=>
//readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
//unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.Al no retornar contenido, su callback sólo es(error)=>

const mejoresAlumnos =  ` 
Santiago Gonzalez
Maria Malajovich
jaquelina talavera
gunter Scherzer
alejandra Huainqueo
Facundo rey
ezequiel
`;

const mejoresAlumnosAppend = `
Lucas Kats
camila Quiros
`

function callbackWriteFile(err) {
    if(err) throw err;
    console.log('archivo guardado')
    appendFile(nombreArchivo, mejoresAlumnosAppend, (err) => {
        if(err) throw err;
        console.log('archivo actualizado');
        readFile(nombreArchivo,'utf-8', (err, data) => {
            if(err) throw err;
            console.log(data);
            unlink(nombreArchivo, (err)=>{
                if(err) throw err;
                console.log("archivo eliminado");
            })
        })
    })
}

writeFile (nombreArchivo, mejoresAlumnos, callbackWriteFile );

