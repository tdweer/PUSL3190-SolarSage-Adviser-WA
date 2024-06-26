const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    pid: {
        type: Number,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    phoneNO: {
        type: Number,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Project', projectSchema)
