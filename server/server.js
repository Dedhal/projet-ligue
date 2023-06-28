require('dotenv').config()
const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')

const Ligue = require('./routes/api/ligue')

const app = express()

const connectDB = require('./db/conn')

app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ 
     extended: true 
}));

connectDB()

app.use('/api/ligue', Ligue)

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
