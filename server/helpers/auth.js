const jwt = require('jsonwebtoken');
const User = require('../models/users');

const Auth = async (req, res, next) => {
	console.log(req.headers)
	try {
		const token = req.headers.authorization

		console.log(token)

		if (!token) {
			return res.status(401).json('Not authorized to access this resource');
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		console.log(decoded)

		const user = await User.findOne({ _id: decoded.id });

		console.log(user)

		if (!user) {
			return res.status(401).json('Not authorized to access this resource');
		}
		req.token = token;
		req.user = user;
		next();
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}

module.exports = Auth