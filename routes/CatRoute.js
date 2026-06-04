const express = require('express');
const router = express.Router();
const catController = require('../controllers/CatController');

router.get('/', catController.getAllCats);
router.post('/', catController.createCat);

module.exports = router;