const express = require('express')
const router = express.Router()

const Auth = require('../../helpers/auth')
const Users = require('../../models/users')

const Login = require('../../helpers/login')

console.log(typeof(Auth))

router.get('/test', (req, res) => res.send('Users route testing!'))

router.get('/', (req, res) => {
    console.log(req.query)
    Users.find(req.query)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ error: 'No Users found' }))
})

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ error: 'No Users found' }))
})

router.post('/', (req, res) => {
    Login.Signup(req, res)
})

router.put('/:id', (req, res) => {
    Users.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        )
})

router.delete('/', (req, res) => {
    console.log(req.body)
    Users.deleteMany({ _id: { $in: req.body }})
        .then(user => res.json({ msg: 'Deleted successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to delete Users' })
        )
})

router.post('/login', function (req, res) { Login.Login(req, res) })

module.exports = router