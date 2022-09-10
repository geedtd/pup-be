import { Puppy } from "../models/puppy.js";


export {
    create,
    index,
    show,
    update,
    deletePuppy as delete,
}

function create(req, res) {
    Puppy.create(req.body)
    .then(puppy => res.status(201).json(puppy))
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

function index(req, res) {
    Puppy.find({})
    .then(puppies => res.status(200).json(puppies))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}

function show(req, res) {
    Puppy.findById(req.params.id)
    .then(puppy => res.status(200).json(puppy))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}

function update(req, res) {
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true} )
    .then(puppy => res.status(204).json(puppy))
    .catch( err => {
        console.log(err)
        res.status(500).json(err)
    })
}

function deletePuppy(req, res) {
    Puppy.findByIdAndDelete(req.params.id)
    .then(puppy => res.status(204).json(puppy))
    .catch( err => {
        console.log(err)
        res.status(500).json(err)
    })
}