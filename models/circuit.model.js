const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CircuitsSchema = new Schema({
    photo: {
        type: String
    },
    url: {
        type: String

    },

    circuitName: {
        type: String
    },
    lat: {
        type: String
    },
    long: {
        type: String
    },
    locality: {
        type: String
    },
    country: {
        type: String
    },
    
}, {
    timestamps: true
})

const Circuit = mongoose.model("Circuit", CircuitsSchema)

module.exports = Circuit