var express = require('express');
var userInfoControllers = require('../controllers/userInfo')
var router = express.Router();

router.get('/', userInfoControllers.UserInfo);

module.exports = router;