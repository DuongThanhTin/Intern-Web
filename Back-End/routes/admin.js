var express = require('express');
var router = express.Router();

var AdminController = require('../controller/admin')



router.post('/image',AdminController.postImage)
router.post('/addproduct',AdminController.postAddProduct)
router.get('/listproduct',AdminController.getListProduct)
module.exports = router;
