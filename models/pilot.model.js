const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pilotSchema = new Schema({
    photo: {
        type: String,
        default: "https://germanalvarez.net/img/german-alvarez-sc.jpg"
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
        type: String,
        default: "1993-12-14"
    },
    nationality: {
        type: String
    },
    custom: {
        type: Boolean,
        default: true
    },
    
    ownerId: { type: Schema.Types.ObjectId },
},{
    timestamps: true
})

const Pilot = mongoose.model("Pilot", pilotSchema)

module.exports = Pilot