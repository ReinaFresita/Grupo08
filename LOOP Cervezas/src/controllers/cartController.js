const db = require("../../database/models");

module.exports = {
    viewCart: async (req, res) => {
        const cart = await db.Cart.findAll()
        
        res.render('productCart', { cart })
    },
}