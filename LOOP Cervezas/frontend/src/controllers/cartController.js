const db = require("../../../backend/src/database/models");

module.exports = {
    viewCart:(req, res) => {
        res.render('productCart')
    },
}