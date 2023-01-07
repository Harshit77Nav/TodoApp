const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
    UserName:{type:String,unique:true,require:true},
    Password:{type:String,require:true}
})

const ResgisterModel = mongoose.model('users',newUser);

module.exports = ResgisterModel;