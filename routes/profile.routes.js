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

    const updatedUser = {}

    updatedUser.favpilot = req.params.id

    User


        .findOne(req.user)


        .then(user => {
            console.log(user)
            // let arr = user.favpilot

            // arr.push(req.params.id)




            User.
            
            findByIdAndUpdate(user._id, updatedUser, {
                    new: true
                })
                .then()
                .catch()


        })

})







module.exports = router