const Taco = require('../models/taco');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
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

function show(req, res){
    Taco.findById(req.params.id)
    .then(function(taco){
        res.status(200).json(taco);
    })
    .catch(function(err) {
        res.status(500).json(err);
    })
}

function update(req, res){
    Taco.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(taco){
        res.status(200).json(taco)
    })
    .catch(function(err) {
        res.status(500).json(err);
    })
}

function deleteOne(req, res){
    Taco.findByIdAndRemove(req.params.id)
    .then(function(taco){
        res.status(200).json(taco);
    })
    .catch(function(err) {
        res.status(500).json(err);
    })
}