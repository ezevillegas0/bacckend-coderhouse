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

    })
}