const express = require('express')
const router = express.Router()

const Constructor = require('../models/constructor.model')

router.get('/', (req, res) => {

    Constructor
        .find()
        .then(allConstructors => {

            res.render("constructors/constructors-list", {
                allConstructors
            })

        })

})

router.get('/:id', (req, res) => {


    Constructor
        .findById(req.params.id)
        .then(oneConstructor => {
            res.render("constructors/constructors-details", oneConstructor)
        })

})



module.exports = router