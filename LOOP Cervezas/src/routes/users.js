const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require('../middlewares/multerUser')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

const { body } = require('express-validator')

const validations = [
    body('firstName').notEmpty().withMessage('Debes escribir un nombre'),
    body('lastName').notEmpty().withMessage('Debes escribir un apellido'),
    body('email').notEmpty().withMessage('Debes escribir un email').bail()
    .isEmail().withMessage('Debes escribir un email válido'),
    body('password').notEmpty().withMessage('Debes escribir una contraseña'),
    body('image').custom((value, {req}) => {
        let file = req.file
        if(!file) throw new Error('Debes subir una foto de perfil')
        return true
    })
]

router.get("/", usersController.list);
router.get("/login", guestMiddleware, usersController.showLogin);
router.post("/login", usersController.loginUsers);
router.get("/register", guestMiddleware, usersController.showRegister);
router.post("/register", upload.single("image"), validations, usersController.create);
router.get("/carrito", usersController.carrito);
router.get("/profile", authMiddleware, usersController.profile);
router.get("/logout", authMiddleware, usersController.logout);
router.delete("/:id/delete", authMiddleware, usersController.delete);

module.exports = router;