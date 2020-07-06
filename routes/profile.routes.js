const express = require("express")
const router = express.Router()
const passport = require("passport")
const User = require("../models/user.model")



// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Endpoints
// router.get('/', (req, res) => {
//     console.log('¿Está el usuario logeado?', req.isAuthenticated())
//     res.render('index')
// })


// Check logged in session 

router.get('/', checkAuthenticated, (req, res) => {

    res.render('profile/profile')


})


router.get('/:id', checkAuthenticated, (req, res) => {

    User
        // .findByIdAndUpdate({ user: req.user }, { $push: { favpilot: [req.params.id] } })

        .findOne(req.user)

        .then(user => console.log(user))



})




// res.render('profile/profile', {
// user: req.user }))




module.exports = router