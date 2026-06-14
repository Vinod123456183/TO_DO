const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error");

const verifyToken = (req, res, next) => {
  // 1. Get token from cookies
  const token = req.cookies.access_token;

  // 2. If token is missing, block access
  if (!token) {
    return next(errorHandler(401, "Unauthorized: No token provided"));
  }

  // 3. Verify token with JWT secret key
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      // 4. If token is invalid or expired, block access
      return next(errorHandler(403, "Forbidden: Invalid token"));
    }

    // 5. If token is valid, attach user info to `req.user`
    req.user = decoded;
    // req.user = user;

    // 6. Pass control to next middleware or controller
    next();
  });
};

module.exports = { verifyToken };
