const express = require('express');
const router = express.Router();
const categoriesAPIController = require('../../controllers/api/categoriesAPIController');

//Rutas
//Listado de películas
router.get('/', categoriesAPIController.list);
//Detalle de una película
router.get('/:id', categoriesAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating', categoriesAPIController.recomended);
//Agregar una película
// router.post('/create', categoriesAPIController.create);
//Modificar una película
// router.put('/update/:id', categoriesAPIController.update);
//Eliminar una película
// router.delete('/delete/:id', categoriesAPIController.destroy);

module.exports = router;