const fs = require("fs");

const nombreArchivo = "autoDeFacundo.json";

const autoDeFacundoString = fs.readFileSync(nombreArchivo, "utf-8")
const autoDeFacundoObjeto = JSON.parse(autoDeFacundoString);

autoDeFacundoObjeto.anio = 2012;

console.log(autoDeFacundoObjeto)

fs.writeFileSync(nombreArchivo, JSON.stringify(autoDeFacundoObjeto) )
console.log(fs.readFileSync(nombreArchivo, "utf-8"));
