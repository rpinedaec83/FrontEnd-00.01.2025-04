const express = require('express');
const router = express.Router();

// 👇 IMPORTA el controlador
const productController = require('../controllers/productController');

// 👇 Asegúrate que estas funciones existen
router.get('/', productController.getAll);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.remove);

module.exports = router;
