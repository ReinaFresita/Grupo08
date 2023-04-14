const db = require("../../database/models");

module.exports = {
    viewCart:(req, res) => {
        res.render('productCart')
    },
}