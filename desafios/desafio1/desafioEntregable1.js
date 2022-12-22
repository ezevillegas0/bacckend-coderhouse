/* DESAFIO ENTREGALBE 1 */

class ProductManager {
    static generatorId = 1;
    constructor() {
        this.products = [];
    }

    /* metodos */
    getProducts() {
        return this.products
    }
    addProduct(title, description, price, stock, thumbnail, code) {
        const newProduct = {
            id: ProductManager.generatorId++,
            title,
            description,
            price,
            stock,
            thumbnail,
            code: code,
        }

        if (this.products.find(product => product.code === newProduct.code)) {
            console.log("Ese codigo ya existe")
        } else {
            if (newProduct.title === (undefined) || newProduct.description === (undefined) || newProduct.price === (undefined) || newProduct.stock === (undefined) || newProduct.thumbnail === (undefined) || newProduct.code === (undefined)) {
                console.log("Todos los campos son obligarios")
            } else {
                this.products.push(newProduct)
            }
        }
    }
    getProductById(id) {
        let myID = parseInt(id);
        let miPRoducto = null;
        this.products.forEach((producto) => {
          if (producto.id === myID) {
            miPRoducto = producto;
          }
        });
        if (miPRoducto === null) {
          return console.log("No existe el producto");
        } else {
          return miPRoducto;
        }
    }
}

const productManager = new ProductManager()

// se inicia el contador en 1
console.log(ProductManager.generatorId)

// se agregan dos productos al array
productManager.addProduct("Camiseta", "Esto es una camiseta", 20000, 14, "Esto es una foto", 1)
productManager.addProduct("Short", "Esto es un short", 4000, 15, "Esto es una foto", 12)

// avisa por consola que todos los campos son obligatorios
// se agrega otro producto
productManager.addProduct("Botin", "Esto es un botin", 5, "Esto es una foto", 3)

// se agrega otro producto
productManager.addProduct("Guante", "Esto es un guante", 2000, 10, "Esto es una foto", 12)
// avisa por consola que el code se repitio 

// se muestran todos los productos agregados al array
console.log(productManager.getProducts())

// se muestra que el id incremento
console.log("el id del ultimo producto es " + ProductManager.generatorId)

// Busca el producto de id 2
console.log("Busqueda de producto: ",productManager.getProductById(2));

// Busca el producto de id 100 y avisa que no existe
productManager.getProductById(100)


/* class ProductManager {
    constructor(){
        this.products = cargarDelArchivo();

    }

    addProduct() {
        this.guardarCambios()

    }
    guardarCambios() {
        fs.writeFile("productos.json", JSON.stringify(this.products))

    }
    cargarDelArchivo() {
        fs.readFile
    }
} */