let express = require('express');
let router = express.Router();

const authController = require('../controllers/chart');

router.get('/chart', authController.getMale);

module.exports = router;
