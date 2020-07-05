const mongoose = require("mongoose")
const Schema = mongoose.Schema

const constructorSchema = new Schema({
    photo: {
        type: String
    },
    url: {
        type: String

    },

    name: {
        type: String
    },
    nationality: {
        type: String
    }
}, {
    timestamps: true
})

const Constructor = mongoose.model("Constructor", constructorSchema)

module.exports = Constructor