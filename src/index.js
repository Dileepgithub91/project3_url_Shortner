const express = require('express')
const route = require('./routes/route')
const mongoose = require('mongoose')
const urlModel = require('./modules/urlModel')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/test", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))

app.use("/", route)

app.listen(3000, function() {
    console.log("Express app running on port 3000")
})