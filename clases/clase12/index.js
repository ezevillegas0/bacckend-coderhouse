// Para usar mongo:
// Instalar el servidor: https://www.mongodb.com/docs/mongodb-shell/crud/
// Instalar el shell: https://www.mongodb.com/docs/manual/reference/method/

// https://www.mongodb.com/docs/mongodb-shell/write-scripts/
db = connect('mongodb://localhost/ejemplo_coder');

db.estudiantes.insertMany([
    {
        nombre: 'Alfredo',
        apellido: 'Romance'
    },
    {
        nombre: 'Facundo',
        apellido: 'Family'
    },
    {
        nombre: 'Cristian',
        apellido: 'War'
    }
])