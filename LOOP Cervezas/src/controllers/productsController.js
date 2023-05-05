const db = require("../../database/models")
const { validationResult } = require('express-validator')

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

        const resultValidation = validationResult(req)

        if(resultValidation.errors.length > 0){
            return res.render('products/create-form',{
            errors:resultValidation.mapped(),
            oldData: req.body
            })
        }

        if (!req.body) return res.status(400).json({ error: "No hay datos" })

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
        const product = await db.Product.findOne(
            { where: { id: req.params.id }}
        )

        const resultValidation = validationResult(req)

        if(resultValidation.errors.length > 0){
            return res.render('products/edit-form',
            { errors:resultValidation.mapped(), oldData: req.body, productToEdit:product }
            )
        }

        if (!req.body) return res.status(400).json({ error: "No hay datos" })

        if (req.file) {
            image = '/images/products/' + req.file.filename;
        } else {
            image = req.body.currentImage;
        }
        
        await db.Product.update({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image: req.file && "/images/products/" + req.file.filename
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