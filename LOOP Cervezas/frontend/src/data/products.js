const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "productsBaseDatos.json");

module.exports = {

  findAll() {
    const productsFileContent = fs.readFileSync(productsFilePath, "utf-8");
    const products = JSON.parse(productsFileContent);
    return products;
  },

  readFile() {
    let fileContents = fs.readFileSync(productsFilePath, "utf8");

    if (fileContents) {
        return JSON.parse(fileContents);
    }

    return [];
  },

  writeFile(contents) {
    let fileContents = JSON.stringify(contents, null, " ");
    fs.writeFileSync(productsFilePath, fileContents);
  },

  saveProduct(product) {
    const products = this.findAll();
    products.push(product);
    const productsFileContent = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
  },

  findById(id) {
    return this.findAll().find((producto) => producto.id == id);
  },

  update(product) {
    let products = this.readFile();
    let updatedProducts = products.map((oneProduct) => {
        if (oneProduct.id == product.id) {
            return product;
        }

        return oneProduct;
    });

    this.writeFile(updatedProducts);

    return product.id;
},
  delete(id) {
      let products = this.readFile();
      let updatedProducts = products.filter(
          (oneProduct) => oneProduct.id != id
      );

      this.writeFile(updatedProducts);
  },
};