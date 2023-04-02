const products = require("../data/products");

module.exports = {
    index: (req, res)=>{
        res.render('index')
    },
    login: (req, res)=>{
        res.render('login')
    },
    register: (req, res)=>{
        res.render('register')
    },
    productCart: (req, res)=>{
        res.render('productCart')
    },
    productDetail: (req, res)=>{
        res.render('productDetail')
    },
    sobreNosotros: (req, res)=>{
        res.render('sobreNosotros')
    },
}