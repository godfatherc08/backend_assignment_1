
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user')

const app = express()
app.use(express.json())
app.use(router)

const port = 27017

const mongo_url= "mongodb://localhost:27017/Users_axia"

mongoose
.connect(mongo_url)
.then(() => {
    console.log('Database worked')
    app.listen(port, () => {
        console.log("App is running")
    })
})

