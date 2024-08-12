const mongoose = require('mongoose')

const schema = mongoose.Schema

const user = new schema ({
    // id : {
    // type: String
    // },
    username: {
    type: String,
    required: true},
    email_address : {
        type:String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true,
        unique: true
    }
})

const User = mongoose.model("user", user)
module.exports = User
