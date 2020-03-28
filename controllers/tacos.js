const Taco = require('../models/taco');

module.exports = {
    index,
    create
}

function index(req, res) {
    Taco.find({})
    .then(function(tacos){
        res.status(200).json(tacos);
    })
    .catch(function(err) {
        res.status(500).json(err);
    })
}

function create(req, res) {
    Taco.create(req.body)
    .then(function(taco){
        res.status(201).json(taco);
    })
    .catch(function(err) {
        res.status(500).json(err);
    })
}