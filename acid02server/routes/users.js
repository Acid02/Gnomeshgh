var express = require('express');
var usersControllers = require('../controllers/users')
var router = express.Router();

/* GET users listing. */
router.post('/', usersControllers.User);
// router.post('/getUser',usersControllers.getUser);

module.exports = router;
