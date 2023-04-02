const products = require("../data/products");
const path = require('path')
const fs = require('fs')

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products/list", { products: products.findAll() });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = products.findAll().find((producto) => producto.id == req.params.id);
        res.render("products/detail", { product });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("products/create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        const product = {
            id: Date.now(),
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            image:req.file ? req.file.filename:"default-image.png",
            /*
                image: req.file
                ? "/images/" + req.file.image
                : "/images/default-img.png",
            */
          };
      
          products.saveProduct(product);
          res.redirect("/products");
    },

    // Update - Form to edit
    edit: (req, res) => {
        let productToEdit = products.findById(req.params.id);
        res.render("products/edit-form", { productToEdit:productToEdit });
    },
    // Update - Method to update
    update: (req, res) => {
        const id = req.params.id;
        const { name, price, description, image } = req.body;
        const updatedProduct = {
            id,
            name,
            price,
            description,
            image,
        };

        products.update(updatedProduct);

        res.redirect("/products");
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        let product = products.findById(req.params.id);
        
        let imagePath = path.join(
            __dirname,
            "../public/images/products/" + product.image
        );

        products.delete(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        res.redirect("/products");
    },
};

module.exports = controller;