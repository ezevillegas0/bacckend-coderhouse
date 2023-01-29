// CLASE 12, CRUD en MongoDB

             //CRUD en MongoDB


// 00:00:00 crud
// 4 operaciones basicas que hacemos sobre una base de datos.
// (create, read, delete, uptade )

/*
cls - limpiar consola
-------------------
mongosh - (abre mongo en terminal)
show dbs - (mostrar base de datos)
use <nombre> - (si no existe la crea)
db - (muestr en que base de datos estamos parados)
show collections - (muestr las colecciones de la db)
db.createCollection("name") - (crear una coleccion en la db)
db.<name>.drop() - (borrar una coleccion)
db.dropDatabase() - (borrar db actual)
db.collection.drop() - (borrar coleccion de la db posicionada)

-------------------
insertar documentos
-------------------

db.collection.insertOne({nombre: "nombre"}) - (Agrega nuevo doc a la colección selecc)
db.collection.insertMany([{},{}]) - (agrega multiples doc ala coleccion)
db.collection.findOne(opt) - (busca elemento con los criterios de busqueda(opt) devuelve el primer en conicidir)
db.collection.find(opt) - (devuelve todos los elementos con ese criterio)


-------------------
conteo de datos
-------------------

db.collection.estimatedDocumentCount()  - (cuenta aprox el numero de docs segun su metadata)
db.collection.countDocuments(opt)- (cuenta los docs con el criterio definido)

*/

// 01:08:00 filtros

/*
-------------------
filtros
-------------------
$and : Realiza operación AND -> sintaxis: {$and: [ {},{} ] }
$or : Realiza operación OR -> sintaxis: {$or: [ {},{} ] }
$lt : Coincide con valores que son menores que un valor especificado.
$lte : Coincide con valores menores o iguales a un valor especificado.
$gt : Coincide con valores mayores a un valor especificado.
$gte : Coincide con valores mayores o iguales a un valor especificado.
$ne : Coincide con valores que no son iguales a un valor especificado.
$eq : Selecciona los documentos que son iguales a un valor especificado.
*/

// 01:40:00 proyecciones, sorts, skips y limits.

/*
proyecciones: traer solo la informacion pedida de todoslos datos.
sorts: ordenar la informacion.
skips: omite el numero de documentos indicados.
limits: limite el numero de documentso devueltos.
*/

// 01:48:00 CRUD - UD. update y delete

/* 
update: actualiza un documento o varios.
db.collection.updateOne(query,update,option)
-----
query: sirve para filtrar qué elementos actualizar (usa los filtros iguales al find)
update: Apartado para indicar qué actualizar de los documentos que cumplen con el filtro. Update tiene sus propios operadores como $set, $unset, $inc, $rename, $mul, $min, $max
option: Opciones a tomar en cuenta para la actualización (como upsert, que inserta el valor en caso de que el documento a actualizar ni siquiera exista).
*/

/* 
delete: elimina datos.

db.collection.deleteOne({key:val}) :
Elimina sólo el primer elemento que cumpla con el criterio

db.collection.deleteMany({key:val}) :
Elimina todos los documentos que cumplan con el criterio.
*/

