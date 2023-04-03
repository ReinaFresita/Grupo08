const { Router } = require("express")
const mainController = require("../controllers/mainController")

const router = Router()

router.get("/", mainController.index)
router.get('/productCart', mainController.productCart)
router.get('/:id/productDetail', mainController.productDetail)
router.get('/sobreNosotros', mainController.sobreNosotros)
router.get('/merchandising', mainController.merchandising)

const productsRouter = require("./products")
router.use("/products", productsRouter)

const usersRouter = require("./users")
router.use("/users", usersRouter)

module.exports = router;