/* DESAFIO ENTREGALBE 2, MANEJO DE ARCHIVOS */

const fs = require("fs")
/* const path = require("path"); */

const nombreArchivo = "products.json"

class ProductManager {
    constructor() {
      this.products = [];
      this.file = nombreArchivo;
    }
    fileExists() {
      return fs.existsSync(this.file);
    }
    addProduct(product) {
      return new Promise((resolve) => {
        if (this.fileExists()) {
          console.log("El archivo ya existe");
          fs.readFile(nombreArchivo, (err, data) => {
            if (err) {
              return console.log("Error al leer el archivo");
            }
            this.products = JSON.parse(data);
            this.products.push(product);
            fs.writeFile(nombreArchivo,JSON.stringify(this.products), (err) => {
                if (err) {
                  return console.log("Error al escribir el archivo");
                }
                resolve();
              }
            );
          });
        } else {
          this.products.push(product);
          fs.writeFileSync(this.file, JSON.stringify(this.products), "utf-8");
          resolve();
        }
      });
    }
    getProductById(id) {
      return new Promise((resolve, reject) => {
        fs.readFile(this.file, "utf-8", (err, data) => {
          if (err) {
            reject(err);
          }
          this.products = JSON.parse(data);
          const product = this.products.find((product) => product.id === id);
          resolve(product);
        });
      });
    }
    getproducts() {
      return new Promise((resolve, reject) => {
        fs.readFile(this.file, "utf-8", (err, data) => {
          if (err) {
            reject(err);
          }
          this.products = JSON.parse(data);
          resolve(this.products);
        });
      });
    }
  
    deleteProductById(id) {
      return new Promise((resolve, reject) => {
        fs.readFile(this.file, "utf-8", (err, data) => {
          if (err) {
            reject(err);
          }
          this.products = JSON.parse(data);
          this.products = this.products.filter((product) => product.id !== id);
          fs.writeFile(nombreArchivo, JSON.stringify(this.products),(err) => {
              if (err) {
                return console.log("Error al escribir el archivo");
              }
              resolve();
            }
          );
        });
      });
    }
  
    updateProduct(id) {
      return new Promise((resolve, reject) => {
        fs.readFile(this.file, "utf-8", (err, data) => {
          if (err) {
            reject(err);
          }
          this.products = JSON.parse(data);
  
          this.products = this.products.map((element, i) => {
            if (element.id = id) {
              element.title = "Se actualizo el titulo!!!!";
              element.description= "Se actualizo la descripcion"
            }
            fs.writeFile(nombreArchivo, JSON.stringify(this.products),(err) => {
                if (err) {
                  return console.log("Error al escribir el archivo");
                }
                resolve();
              }
            );
          });
        });
      });
    }
  }
module.exports = ProductManager;