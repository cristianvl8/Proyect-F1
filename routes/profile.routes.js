const express = require("express")
const router = express.Router()
const passport = require("passport")
const User = require("../models/user.model")



// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


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
           
 
            User
                .findByIdAndUpdate(user._id, { $push: {favpilot: req.params.id} }, {
                     new: true})
                .then(() => console.log())
                .catch(err => console.log(err))

            

        })

})







module.exports = router