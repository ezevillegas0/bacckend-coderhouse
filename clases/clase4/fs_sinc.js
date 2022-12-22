//CLASE 4, MANEJO DE ARCHIVOS EN JAVASCRIPT   

             //fs sincronico

const fs = require('fs');

const mejoresAlumnosSync =  ` 
Santiago Gonzalez
Maria Malajovich
jaquelina talavera
gunter Scherzer
alejandra Huainqueo
Facundo rey
ezequiel
`;

//writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
fs.writeFileSync('mejoresAlumnosSync.txt', mejoresAlumnosSync )

//existsSync = Corrobora que un archivo exista!
console.log(fs.existsSync('mejoresAlumnosSync.txt'));

//appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
const mejoresAlumnosSyncAppend = `
Lucas Kats
camila Quiros
`

fs.appendFileSync('mejoresAlumnosSync.txt',mejoresAlumnosSyncAppend);

//readFileSync = Para obtener el contenido de un archivo.
console.log(fs.readFileSync('mejoresAlumnosSync.txt','utf-8'))

//unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
fs.unlinkSync("clase4.js")

/* ----------------------------- */ 

