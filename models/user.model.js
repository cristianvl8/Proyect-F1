const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    favpilot: [{
        type: Schema.Types.ObjectId,
        ref: 'Pilot'
    }],
    favcircuit: [{
        type: Schema.Types.ObjectId,
        ref: 'Circuit'
    }],
    favconstructor: [{
        type: Schema.Types.ObjectId,
        ref: 'Constructor'
    }],
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User