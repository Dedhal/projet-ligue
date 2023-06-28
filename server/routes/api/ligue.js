const express = require('express')
const router = express.Router()

const Ligue = require('../../models/Ligue')

router.get('/test', (req, res) => res.send('Ligue route testing!'))

router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router