const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require('../middlewares/multerUser')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

const { body } = require('express-validator')

const validationsRegister = [
    body('firstName').notEmpty().withMessage('Debes escribir un nombre').isLength({min:2}).withMessage('Debe tener al menos dos caracteres'),
    body('lastName').notEmpty().withMessage('Debes escribir un apellido').isLength({min:2}).withMessage('Debe tener al menos dos caracteres'),
    body('email').notEmpty().withMessage('Debes escribir un email').bail()
    .isEmail().withMessage('Debes escribir un email válido'),
    body('password').notEmpty().withMessage('Debes escribir una contraseña').isLength({min:8}).withMessage('Debe tener al menos 8 caracteres'),
    body('image').custom((value, {req}) => {
        let file = req.file
        if(!file) throw new Error('Debes subir una foto de perfil')
        return true
    })
]

const validationsLogin = [
    body('email').notEmpty().withMessage('Debes escribir un email').bail().isEmail().withMessage('Debes escribir un email válido'),
    body('password').notEmpty().withMessage('Debes escribir una contraseña').isLength({min:8}).withMessage('Debe tener al menos 8 caracteres'),
]

router.get("/", usersController.list);
router.get("/login", guestMiddleware, usersController.showLogin);
router.post("/login", validationsLogin, usersController.loginUsers);
router.get("/register", guestMiddleware, usersController.showRegister);
router.post("/register", upload.single("image"), validationsRegister, usersController.create);
/* router.get("/carrito", usersController.carrito); */
router.get("/profile", authMiddleware, usersController.profile);
router.get("/logout", authMiddleware, usersController.logout);
router.delete("/:id/delete", authMiddleware, usersController.delete);

module.exports = router;