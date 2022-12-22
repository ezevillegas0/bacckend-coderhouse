             //fs promesas

//Al colocar a nuestro módulo fs el .promises estamos indicando que, la operación que se hará debe ser ejecutada de manera asíncrona, pero en lugar de manipularla con un callback, lo podemos hacer con .then +.catch, o bien con async/await.

//fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
//fs.promises.readFile  = Para obtener el contenido de un archivo.
//fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
//fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.

// const fs = require('fs');
// fs.promises.writeFile()
const fsPromises = require("fs/promises");

const nombreArchivo = "mejoresAlumnos-promises.txt"

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

fsPromises.writeFile(nombreArchivo, mejoresAlumnos).then(() =>{
    console.log("archivo escrito")
    operacionesAsincronicas();
}).then(() => 
fsPromises.unlink(nombreArchivo)).then(()=>{
    console.log('proceso finalizado')
}).catch((err) => {
    console.log(err)
});

async function operacionesAsincronicas(){
    await fsPromises.appendFile(nombreArchivo, mejoresAlumnosAppend)
    const contenido = await fsPromises.readFile(nombreArchivo, "utf-8")
    console.log(contenido)
}