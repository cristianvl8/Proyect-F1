const express = require("express")
const router = express.Router()
const passport = require("passport")
const User = require("../models/user.model")
const cloudUploader = require('../configs/cloudinary.config.js')


// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')



// Add to favourite pilots pushing id to the array

router.get('/favpilot/:id', checkAuthenticated, (req, res) => {


    User
        .findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, {
                $push: {
                    favpilot: req.params.id
                }
            })
            .then(() => res.redirect('/pilots'))
            .catch(err => console.log(err)))

})


// Add to favourite circuits pushing id to the array

router.get('/favcircuit/:id', checkAuthenticated, (req, res) => {

    User
        .findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, {
                $push: {
                    favcircuit: req.params.id
                }
            })
            .then(() => res.redirect('/circuits'))
            .catch(err => console.log(err)))

})

// Add to favourite constructors pushing id to the array

router.get('/favconstructor/:id', checkAuthenticated, (req, res) => {

    User.findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, {
                $push: {
                    favconstructor: req.params.id
                }
            })
            .then(() => res.redirect('/constructors'))
            .catch(err => console.log(err)))

})

// Profile favourite list 

router.get('/', checkAuthenticated, (req, res) => {

    User
        .findOne(req.user)
        .then(Objuser => User
            .findById(Objuser._id)
            .populate("favpilot")
            .populate("favcircuit")
            .populate("favconstructor")
            .then(user => res.render('profile/profile-list', user)))

})


// Profile delete favourite pilot

router.get('/deletepilot/:id', checkAuthenticated, (req, res) => {


    User
        .findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, {
                $pull: {
                    favpilot: req.params.id
                }
            })
            .then(() => res.redirect('/profile'))
            .catch(err => console.log(err)))

})

// Profile delete favourite circuit

router.get('/deletecircuit/:id', checkAuthenticated, (req, res) => {


    User
        .findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, {
                $pull: {
                    favcircuit: req.params.id
                }
            })
            .then(() => res.redirect('/profile'))
            .catch(err => console.log(err)))
})

// Profile delete favourite circuit

router.get('/deleteconstructor/:id', checkAuthenticated, (req, res) => {


    User.findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, {
                $pull: {
                    favconstructor: req.params.id
                }
            })
            .then(() => res.redirect('/profile'))
            .catch(err => console.log(err)))

})


// Profile Avatar 




// router.get('/upload-cdn', (req, res, next) => res.render('profile/upload-form-cdn'))

// router.post('/upload-cdn', cloudUploader.single('imageFile'), (req, res, next) => {

//     console.log('Multer, en combinación con Cloudinary, crea este req.file:', req.file)

//     User.create({
//             name: req.body.imageName,
//             path: req.file.url,
//             originalName: req.file.originalname
//         })
//         .then(() => res.redirect('/gallery'))
//         .catch(err => next(new Error(err)))
// })




// Profile Avatar 




// router.get('/upload-cdn', (req, res, next) => res.render('profile/upload-form-cdn'))

// router.post('/upload-cdn', cloudUploader.single('imageFile'), (req, res, next) => {

//     console.log('Multer, en combinación con Cloudinary, crea este req.file:', req.file)

//     User.create({
//             name: req.body.imageName,
//             path: req.file.url,
//             originalName: req.file.originalname
//         })
//         .then(() => res.redirect('/gallery'))
//         .catch(err => next(new Error(err)))
// })










module.exports = router