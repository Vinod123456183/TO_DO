const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verify-token");
const { authLimiter } = require("../middlewares/auth-limiter");

const {
  checkFailedAttempts,
  trackFailedAttempts,
  resetFailedAttempts,
} = require("../middlewares/auth-limiter");

const {
  signUpController,
  loginController,
  logOutController,
} = require("../controllers/index-controller");

router.post("/signup", signUpController);
router.get("/logout", verifyToken, logOutController);

// router.post("/login", authLimiter, loginController);
router.post("/login", checkFailedAttempts, async (req, res, next) => {
  try {
    const success = await loginController(req, res);

    if (success) {
      resetFailedAttempts(req); // Allow login and reset block
      res.status(200).json({ message: "Login successful" });
    } else {
      trackFailedAttempts(req);
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    trackFailedAttempts(req);
    next(err);
  }
});

module.exports = router;
