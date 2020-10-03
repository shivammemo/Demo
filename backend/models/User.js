let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name : String,
    gender : String,
    email : String,
    mobile : String,
    technology : Object,
    category : String
});

module.exports = mongoose.model('User', userSchema);