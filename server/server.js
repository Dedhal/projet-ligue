require('dotenv').config()
const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')

const Produits = require('./routes/api/produits')
const Users = require('./routes/api/Users')

const app = express()

const connectDB = require('./db/conn')

app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ 
     extended: true 
}));

connectDB()

app.use('/api/produits', Produits)
app.use('/api/Users', Users)

app.listen(5000, () => {
    console.log("Server started on port 5000")
})
