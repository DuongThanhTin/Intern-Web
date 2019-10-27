var express = require('express');
var router = express.Router();

var AdminController = require('../controller/admin')



router.post('/image',AdminController.postImage)
router.post('/addproduct',AdminController.postAddProduct)
router.get('/categories',AdminController.getListProduct)
router.get('/categories/:categoriesId',AdminController.getListProductCategory)
module.exports = router;
