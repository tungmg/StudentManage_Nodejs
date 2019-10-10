let express = require('express');
let router = express.Router();

const authController = require('../controllers/auth');

router.get('/regist', authController.getRegist);

router.post('/regist', authController.postRegist);

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

module.exports = router;
