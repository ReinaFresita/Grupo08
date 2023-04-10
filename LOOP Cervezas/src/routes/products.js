const express = require('express')
const router = express.Router();
const productsController = require("../controllers/productsController");
const upload = require('../middlewares/multer')

const { body } = require('express-validator')

const validations = [
    body('name').notEmpty().withMessage('Debes escribir un nombre del producto').isLength({min:2}).withMessage('Debe tener al menos dos caracteres'),
    body('price').notEmpty().withMessage('Debes escribir un precio del producto').isLength({min:2}).withMessage('Debe tener al menos dos caracteres'),
    body('description').notEmpty().withMessage('Debes escribir una descripción del producto'),
    body('image').custom((value, {req}) => {
        let file = req.file
        if(!file) throw new Error('Debes subir una foto del producto')
        return true
    })
]

router.get("/", productsController.index);
router.get("/create" ,productsController.createPage);
// router.post("/create", productsController.create);
router.post("/create",upload.single("image"), validations, productsController.create);
router.get("/:id", productsController.detail);
router.get("/:id/edit", productsController.edit);
router.put("/:id", upload.single("image"), productsController.update);
router.delete("/:id/delete", productsController.destroy);

module.exports = router;