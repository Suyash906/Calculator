const mongoose = require('mongoose');

const calculationsSchema = mongoose.Schema({
    expression: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    result: {
        type: String,
        required : true
    },
    date:{ type: Date, default: Date.now }
    
   });

module.exports = mongoose.model('Calculations', calculationsSchema);