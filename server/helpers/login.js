const bcrypt = require('bcrypt') // en python c'est mieux
const jwt = require('jsonwebtoken')
const Users = require('../models/users')

exports.Signup = async (req, res) => {

    console.log(req.body)

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            console.log(hash)
            Users.create({
                login: req.body.login,
                email: req.body.email,
                password: hash,
                role : 0
            })
                .then(() => {
                    console.log("Utilisateur créé")
                    res.status(200).json({ message: "Utilisateur créé" })
                })
                .catch(error => {
                    console.log("ici")
                    console.log(error)
                    res.status(400).json({ error : "Requête incorrecte" })
                    });
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        });
};

exports.Login = async (req, res) => {
    console.log(req.body)


    const email = req.body.params.email
    const password = req.body.params.password

    console.log(email, password)

    const user = await Users.findOne({ 'email': email })

    console.log(user)

    if (!user) {
        return res.status(400).json({
            error: "Identifiant incorrect"
        })
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({
            error: "Mot de passe incorrect"
        })
    }

    console.log(user.role)
    
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET)

    const { password: userPassword, ...userData } = user

    delete userData.password

    //console.log(token)

    return res.json({token})

}