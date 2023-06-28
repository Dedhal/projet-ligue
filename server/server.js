require('dotenv').config()
const express = require('express')
let cors = require('cors')

const Ligue = require('./routes/api/ligue')

const app = express()

const connectDB = require('./db/conn')

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/ligue', Ligue)

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
