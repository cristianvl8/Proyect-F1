const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pilotSchema = new Schema({
    photo: {
        type: String
    },
    permanentNumber: {
        type: String

    },

    code: {
        type: String
    },
    url: {
        type: String
    },
    givenName: {
        type: String 
    },
    familyName: {
        type: String
    },
    dateOfBirth: {
        type: String 
    },
    nationality: {
        type: String
    }
}, {
    timestamps: true
})

const Pilot = mongoose.model("Pilot", pilotSchema)

module.exports = Pilot