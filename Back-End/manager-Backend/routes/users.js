const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors')

const UserController = require('../controller/user')



router.use(cors())
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//Sign Up
router.get('/signup',UserController.getSignUp)
router.post('/signup',UserController.postSignUp)


//router.get('/account/:_id',UserController.getEditUser)
module.exports = router