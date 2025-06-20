const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/paytm');

//Schema : User, 
const userSchema = mongoose.Schema({
    username : String,
    password : String, 
    firstName : String, 
    lastName : String
})

//Model 
const User = mongoose.model('User', userSchema);

module.exports ={
    User
}