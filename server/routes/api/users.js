const express = require('express')
const router = express.Router()

const Users = require('../../models/users')

router.get('/test', (req, res) => res.send('Users route testing!'))

router.get('/', (req, res) => {
    Users.find()
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ noquestionsfound: 'No Users found' }))
})

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ noquestionsfound: 'No Users found' }))
})

router.post('/', (req, res) => {
    Users.create(req.body)
        .then(user => res.json({ msg: 'User added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this User' }))
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

module.exports = router