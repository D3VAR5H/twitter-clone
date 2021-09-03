// Middleware to authenticate user using JWT
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (token == null) return res.sendStatus(401);
	jwt.verify(token, "secretKey", (err, user) => {
		if (err) {
			return res.status(403).json(err);
		}
		req.user = user;
	});
	next();
}

module.exports = authenticateToken;