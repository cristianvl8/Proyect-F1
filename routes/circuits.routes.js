const express = require('express')
const router = express.Router()

const Circuit = require('../models/circuit.model')

router.get('/', (req, res) => {

    Circuit
        .find()
        .then(allCircuits => {

            res.render("circuits/circuits-list", {
                allCircuits
            })

        })

})

router.get('/:id', (req, res) => {


    Circuit
        .findById(req.params.id)
        .then(oneCircuit => {
            res.render("circuits/circuits-details", oneCircuit)
        })

})



module.exports = router