let express = require('express');
let router = express.Router();

let homeController = require('../controllers/home');

router.get('/home', homeController.homeForm);

module.exports = router;
