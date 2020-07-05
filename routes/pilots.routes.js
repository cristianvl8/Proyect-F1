const express = require('express')
const router = express.Router()

const Pilot = require('../models/pilot.model')

router.get('/', (req, res) => {

    Pilot
        .find()
        .then(allPilots => {

            res.render("pilots/pilots-list", { allPilots })

        })

})

router.get('/:id', (req, res) => {
    

    Pilot
        .findById(req.params.id)
        .then(onePilot => {
            res.render("pilots/pilots-details", onePilot)
        })

})




module.exports = router