const Sequelize = require('sequelize');
const db = require("../../database/models")

module.exports = {
    
    index: async (req, res)=>{
        res.render('index', { products: await db.Product.findAll({
             where: { price: { [Sequelize.Op.lt]: 1000 } } 
        })})
    },

    productCart: (req, res)=>{
        res.render('productCart')
    },

    productDetail: async (req, res) => {
        res.render('productDetail', { product: await db.Product.findOne({
            where: { id: req.params.id } 
       })})
    },

    sobreNosotros: (req, res)=>{
        res.render('sobreNosotros')
    },

    merchandising: async (req, res) => {
        res.render('merchandising' , { products: await db.Product.findAll({
             where: { price: { [Sequelize.Op.gte]: 1000 } } 
        })})
    },
}