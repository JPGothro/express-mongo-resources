const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    nbrbdrms: {
        type: Number,
        default: 1,
        required: true
    },
    nbrbaths: {
        type: Number,
        default: 1,
        required: true
    },
    totalsize: {
        type: Number,
        required: true
    }
},
{
    // schema level settings
    // timestamps: true
});

module.exports = mongoose.model('ApartmentUnit', schema);