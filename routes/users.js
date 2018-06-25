var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UserController');

/* GET users listing. */
router.get('/', userController.getUsers);

router.post('/create', userController.addUser);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
