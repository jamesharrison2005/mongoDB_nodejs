const express = require('express');
const router = express.Router();
const catController = require('../controllers/CatController');

router.get('/', catController.getAllCats);
router.post('/', catController.createCat);
router.delete('/', catController.deleteCat);

module.exports = router;