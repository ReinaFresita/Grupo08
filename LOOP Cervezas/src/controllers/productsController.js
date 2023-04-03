const db = require("../../database/models")

// const products = require("../data/products");
// const path = require('path')
// const fs = require('fs')

const controller = {
    index: async (req, res) => {
        res.render("products/list", { products: await db.Product.findAll() })
    },

    createPage: (req, res) => {
        res.render("products/create-form");
    },

    create: (req, res) => {
        db.Product.create({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image: req.file ? "/images/products/" + req.file.filename : "default-image.png"
        })
        
        res.redirect("/products")
    },

    detail: async (req, res) => {
        const product = await db.Product.findOne(
            { where: { id: req.params.id }}
        )
        res.render("products/detail", { product });
    },

    edit: async (req, res) => {
        const product = await db.Product.findOne(
            { where: { id: req.params.id }}
        )
        res.render("products/edit-form", { productToEdit:product });
    },

    update: async (req, res) => {
        await db.Product.update({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image: req.file ? "/images/products/" + req.file.filename : "default-image.png"
        },
        { where: { id:req.params.id }});

        res.redirect("/products");
    },

    destroy: async (req, res) => {
        await db.Product.destroy({ where: { id:req.params.id }});
        
        /* let product = products.findById(req.params.id);
        
        let imagePath = path.join(
            __dirname, '../../public/', product.image
        );

        fs.unlink(imagePath)

        products.delete(req.params.id); */
        res.redirect("/products");
    },

    

    /* store: (req, res) => {
        const product = {
            id: Date.now(),
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            image: req.file ? "/images/products/" + req.file.filename : "default-image.png",
          };
      
          products.saveProduct(product);
          res.redirect("/products");
    }, */
};

module.exports = controller;