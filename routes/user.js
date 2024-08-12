const express = require('express')
const router = express.Router()
const addUser = require('../controllers/user')
//const getUser = require('../controllers/user')
//const editUser = require('../controllers/user')
//const deleteUser = require('../controllers/user')


router.post('/add-user', addUser)
//router.get('/get-user/:id', getUser)
//router.put('/update-user/:id', editUser)
//router.delete('/delete-user/:id', deleteUser)


module.exports = router
