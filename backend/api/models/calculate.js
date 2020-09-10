const mongoose = require('mongoose');

const calculationsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    expression: {
        type: String,
        required : true
    },
    name: {
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