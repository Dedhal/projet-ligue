require('dotenv').config()
const express = require('express')
let cors = require('cors')

const Ligue = require('./routes/api/Ligue')
const Users = require('./routes/api/Users')

const app = express()

const connectDB = require('./db/conn')

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/ligue', Ligue)
app.use('/api/users', Users)

app.listen(5000, () => {
    console.log("Server started on port 5000")
})
