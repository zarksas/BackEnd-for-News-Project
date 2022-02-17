const { Router } = require('express');
const router = Router();
const { categorysController } = require('../controllers/categorys.controller');

router.post('/category', categorysController.addCategory);
router.get('/category', categorysController.getAllCategory);
router.get('/category/:id', categorysController.getCategoryById)


module.exports = router;