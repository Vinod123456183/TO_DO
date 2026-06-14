// Track failed login attempts manually (per IP)
const failedLoginAttempts = {};

const MAX_FAILED_ATTEMPTS = 3;
const BLOCK_TIME =  6 * 1000; // 15 minutes

const checkFailedAttempts = (req, res, next) => {
  const ip = req.ip;

  const record = failedLoginAttempts[ip];

  if (record && record.count >= MAX_FAILED_ATTEMPTS) {
    const timePassed = Date.now() - record.lastAttempt;

    if (timePassed < BLOCK_TIME) {
      const secondsLeft = Math.ceil((BLOCK_TIME - timePassed) / 1000);
      return res.status(429).json({
        message: `Too many failed login attempts. Try again in ${secondsLeft} seconds.`,
      });
    } else {
      // Reset after block time
      failedLoginAttempts[ip] = { count: 0, lastAttempt: Date.now() };
    }
  }

  next();
};

const trackFailedAttempts = (req) => {
  const ip = req.ip;
  if (!failedLoginAttempts[ip]) {
    failedLoginAttempts[ip] = { count: 1, lastAttempt: Date.now() };
  } else {
    failedLoginAttempts[ip].count += 1;
    failedLoginAttempts[ip].lastAttempt = Date.now();
  }
};

const resetFailedAttempts = (req) => {
  const ip = req.ip;
  if (failedLoginAttempts[ip]) {
    delete failedLoginAttempts[ip]; // Reset on successful login
  }
};

module.exports = {
  checkFailedAttempts,
  trackFailedAttempts,
  resetFailedAttempts,
};
