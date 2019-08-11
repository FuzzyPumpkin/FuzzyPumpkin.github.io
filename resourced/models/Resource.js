const mongoose = require('mongoose');

const ResourceSchema = mongoose.Schema({
    siteURL: {
        type: String,
    },
    imgURL: {
        type: String,
    },
    description: {
        type: String,
    },
    tags: {
        type: Array,
    },
    name: {
        type: String,
    }
})

module.exports = mongoose.model('resource', ResourceSchema);