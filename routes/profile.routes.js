const express = require("express")
const router = express.Router()
const passport = require("passport")
const User = require("../models/user.model")
const Pilot = require("../models/pilot.model")



// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')



// Add to favourite pilots pushing id to the array

router.get('/favpilot/:id', checkAuthenticated, (req, res) => {


    User
        .findOne(req.user)
        .then(user => {


            User
                .findByIdAndUpdate(user._id, {
                    $push: {
                        favpilot: req.params.id
                    }
                }, {
                    new: true
                })
                .then(() => res.redirect('/pilots'))

                .catch(err => console.log(err))

        })

})

// Add to favourite circuits pushing id to the array

router.get('/favcircuit/:id', checkAuthenticated, (req, res) => {
    
    User
        .findOne(req.user)
        .then(user => {


            User
                .findByIdAndUpdate(user._id, {
                    $push: {
                        favcircuit: req.params.id
                    }
                }, {
                    new: true
                })
                .then(() => res.redirect('/circuits'))

                .catch(err => console.log(err))

        })

})

// Add to favourite constructors pushing id to the array

router.get('/favconstructor/:id', checkAuthenticated, (req, res) => {

    User
        .findOne(req.user)
        .then(user => {


            User
                .findByIdAndUpdate(user._id, {
                    $push: {
                        favconstructor: req.params.id
                    }
                }, {
                    new: true
                })
                .then(() => res.redirect('/constructors'))

                .catch(err => console.log(err))

        })

})

// Check logged in session 

router.get('/', checkAuthenticated, (req, res) => {







    res.render('profile/profile')

})


// router.get('/favpilots', checkAuthenticated, (req, res) => {

//     User

//         .findOne(req.user)
//         .then(user => {

//    User
//         .findById(user._id)
//     .populate('favpilot')
// Pilot.find()
//     .then
//          res.render('profile/favourite-pilots', user._id)
// asd

//         })



// })






module.exports = router