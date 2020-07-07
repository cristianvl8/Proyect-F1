const express = require("express")
const router = express.Router()
const passport = require("passport")
const User = require("../models/user.model")
const Pilot = require("../models/pilot.model")



// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


// Check logged in session 

router.get('/', checkAuthenticated, (req, res) => {

    res.render('profile/profile')

})

router.get('/:id', checkAuthenticated, (req, res) => {


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