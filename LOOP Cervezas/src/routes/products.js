const express = require('express')
const router = express.Router();
const productsController = require("../controllers/productsController");
const upload = require('../middlewares/multer')

// router.use(express.urlencoded({ extended: true }));

router.get("/", productsController.index);
router.get("/create", productsController.createPage);
// router.post("/create", productsController.create);
router.post("/create", upload.single("image"), productsController.create);
router.get("/:id", productsController.detail);
router.get("/:id/edit", productsController.edit);
router.put("/:id", upload.single("image"), productsController.update);
router.delete("/:id/delete", productsController.destroy);

module.exports = router;