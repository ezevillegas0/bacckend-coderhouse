// CLASE 3, PROGRAMACION SINCRONICA Y ASINCRONICA

             //callbacks

/* 
setTimeout(() => {
    console.log("hola mundo")
}, 1000);
console.log("inicio")

imprime:
-inicio
-hola mundo
*/

/* ----------------------------- */    

const baseDeDatos = [1,2,3,4,5,6,7,8,9];
function consultarBaseDeDatos(numero, callback){
    setTimeout(() => {
        const exists = baseDeDatos.some(num => num === numero);
        if (!!exists){ //si existe
            callback(null, true) //cuando no hay errores es null
        }else{
            callback("el numero" + numero + " no esta cargado");
        }
    }, 1000);
}

console.log("inicio")
function miCallback(error, value) {

    if(error){
        throw new Error(error);
    }
    console.log("numero encontrado con exito")
}
console.log(consultarBaseDeDatos(1, miCallback));

/* ----------------------------- */    

             //promesas

// es un objeto que nos permite encerrar una operacion, la cual reacccionara a dos posibles situaciones dentro de una promesa. 
// la promesa se puede cumplir(fullfilled) o puede fallar(rejected).

const miPromesa = new Promise((resolve, reject)=> {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("el numero salio mayor a 0.5");
        }else{
            reject("el menor salio mayor a 0.5")
        }
    }, 1000);
});

//el then ejecuta mi promesa y cuando se resuelva me devuelve un valor.
//el reject lo captamos con el catch.
// el finally se va a ejecutar siempre, no importa si entra en el then o en el catch.
miPromesa.then((valorResolve)=>{
    console.log(valorResolve);
}).catch((valorReject)=>{
    console.log(valorReject)
}).finally(()=>{
    console.log("promise finally!")
});
//las promesas se pueden encadenar, es decir que puedo poner varios parametros, el then y el catch se pueden mezclar.

/* ----------------------------- */    

             //async - await

//cuando pongo un async delante de una funcion me permite que el await ejecute promesas.

/* const miPromesaDePromesa = miPromesa
 .finally(() =>  {
});

miPromesaDePromesa.then(() =>{
    console.log("then de mi promesa")
}) */

const miPromesaDePromesaAsync = async function() {
    let x = 1;
    try{
       const result = await miPromesa()
       console.log(result)
    }catch (err){
        console.log(err)
    }finally{
        console.log(x)
    }
}
miPromesaDePromesaAsync();

/* ----------------------------- */    

             //hands on lab

function suma(sumando1, sumando2) {
    return new Promise(function (resolve, reject) {
        if(sumando1 === 0 || sumando2 === 0) {
            return reject("no se puede sumar 0");
        }
        let resultado = sumando1 + sumando2;
        if (resultado <= 0 ){
            return reject("la calculadora solo devuelve valores positivos")
        }
        return resolve(resultado)
    })
}

const resta = (minuendo, sustraendo) =>
    new Promise((resolve, reject) => {
        if (minuendo === 0 || sustraendo === 0) {
            return reject("operacion invalida")
        }
        let resultado = minuendo - sustraendo;
        if(resultado <= 0) {
            return reject("la calculadora solo puede devolver valor positivos.")
        }
        resolve(resultado)
})

const multiplicacion = (numero1, numero2) =>
  new Promise((resolve, reject) => {
    if (numero1 <= 0 || numero2 <= 0){
        reject("ninguno de los valores puede ser negativo")
    }
    let resultado = numero1 * numero2;
    if(resultado <= 0 ){
        reject("La calculadora sólo puede devolver valores positivos")
    }
    resolve(resultado)
  });

function division(dividendo, divisor) {
  return new Promise(function (resolve, reject) {
    if (divisor === 0) {
      reject("No se puede divir por 0");
    } else {
      let resultado = dividendo / divisor;
      if (resultado <= 0) {
        return reject("La calculadora solo debe devolver valores positivos");
      }
      return resolve(resultado);
    }
  });
}

async function calculos(){
    let res;
    try{
    // res = await multiplicacion(1, 2);
    console.log(res)
    }catch(error){
        throw new Error(error)
    }
}
calculos();