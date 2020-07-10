const express = require('express')
const router = express.Router()
const passport = require("passport")
const Pilot = require('../models/pilot.model')


//Crear Piloto


const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

router.get('/new', checkAuthenticated, (req, res) => {

    res.render('pilots/pilots-form')


})

router.post('/new', checkAuthenticated, (req, res) => {

    const {
        givenName,
        familyName,
        code,
        nationality,
        dateOfBirth,
        permanentNumber
    } = req.body
    Pilot
        .create({
            givenName,
            familyName,
            code,
            nationality,
            dateOfBirth,
            permanentNumber,
            ownerId: req.user.id
        })
        .then(() => res.redirect('/pilots'))
        .catch(err => console.log("Error en la BD", err))

})


router.get("/delete/:id", checkAuthenticated, (req, res) => {

    Pilot
        .findById(req.params.id)
        .then(thePilot => req.user.id == thePilot.ownerId ?

            Pilot
            .findByIdAndDelete(req.params.id)
            .then(() => res.redirect("/pilots"))
            .catch(err => console.log("Error en la BD", err)) :
            res.redirect("/login")
        )

})


// Editar Pilotos

router.get("/edit/:id", checkAuthenticated, (req, res) => {

    Pilot
        .findById(req.params.id)
        .then(thePilot =>

            req.user.id == thePilot.ownerId ?
            res.render('pilots/pilots-edit-form', thePilot) :
            res.redirect("/login"))

})


router.post("/edit/:id", checkAuthenticated, (req, res) => {

    const {
        givenName,
        familyName,
        code,
        nationality,
        dateOfBirth,
        permanentNumber,


    } = req.body

    Pilot

        .findById(req.params.id)
        .then(thePilot => req.user.id == thePilot.ownerId ?

            Pilot
            .findByIdAndUpdate(req.params.id, {
                givenName,
                familyName,
                code,
                nationality,
                dateOfBirth,
                permanentNumber,
                ownerId: req.user.id
            })
            .then(() => res.redirect("/pilots")) :
            res.redirect("/login"))


})



//Listar Pilotos

router.get('/', (req, res) => {
    Pilot
        .find()
        .then(allPilots => {

            res.render("pilots/pilots-list", {
                allPilots
            })

        })
})


// Detalles de Pilotos

router.get('/:id', (req, res) => {


    Pilot
        .findById(req.params.id)
        .then(onePilot => {
            res.render("pilots/pilots-details", onePilot)
        })
})



module.exports = router