const { Router } = require("express")
const cartController = require("../controllers/cartController")

const router = Router()

router.get('/productCart', cartController.viewCart)
/* router.get('/productCart', cartController.viewCart)
router.get('/productCart', cartController.viewCart)
router.get('/productCart', cartController.viewCart)
router.get('/productCart', cartController.viewCart) */

module.exports = router;