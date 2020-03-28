var express = require('express');
var router = express.Router();
var tacosCtrl = require('../controllers/tacos');

router.get('/tacos', tacosCtrl.index);
router.post('/tacos', tacosCtrl.create);

module.exports = router;
