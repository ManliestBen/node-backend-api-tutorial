var express = require('express');
var router = express.Router();
var tacosCtrl = require('../controllers/tacos');

router.get('/tacos', tacosCtrl.index);
router.post('/tacos', tacosCtrl.create);
router.get('/tacos/:id', tacosCtrl.show);
router.put('/tacos/:id', tacosCtrl.update);
router.delete('/tacos/:id', tacosCtrl.delete);

module.exports = router;
