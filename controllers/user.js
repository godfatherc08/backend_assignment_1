
const User = require('../models/user')

const addUser = async(req, res) => {
    const body = req.body
    const new_user = new User({
    username : body.username,
    email_address : body.email_address,
    password : body.password
      })
    // const new_user = new User(body)
    new_user.save()
    console.log(new_user)
    res.json("Your profile has been created")
}

// const getUser = async(req, res) => {
//     const params = req.params
//     const users = User.findOne({ _id: params.id})
//     res.send(users)
// }

// const editUser = async(req, res) => {
//     const body = req.body
//     const params = req.params
//     const users =  User.findOne({ _id: params.id})
//     if(body.username != User.username){
//         User.username = body.username
//     }
// }

// const deleteUser = async(req, res) => {
//     const params = req.params
//     const delete_user = User.deleteOne({ _id: params.id})
//     res.send('User deleted')
// }


module.exports = addUser
//module.exports = getUser
//module.exports = editUser
//module.exports = deleteUser


