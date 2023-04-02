const { Router } = require("express")
const mainController = require("../controllers/mainController")

const router = Router()

router.get("/", mainController.index)
router.get("/login", mainController.login)
router.get('/register', mainController.register)
router.get('/productCart', mainController.productCart)
router.get('/productDetail', mainController.productDetail)
router.get('/sobreNosotros', mainController.sobreNosotros)

const productsRouter = require("./products")
router.use("/products", productsRouter)

module.exports = router;