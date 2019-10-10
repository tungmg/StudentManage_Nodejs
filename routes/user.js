let express = require('express');
let router = express.Router();

const userController = require('../controllers/user');

router.get('/users-list', userController.getAllUser);

router.post('/delete-user', userController.postDeleteUser);

module.exports = router;
