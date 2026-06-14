const { errorHandler } = require("../utils/error");
const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");
const { formatDistanceToNow } = require("date-fns");
const rateLimit = require("express-rate-limit");

const signUpController = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
      return next(errorHandler(400, "User Already Exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const createdAtDiff = formatDistanceToNow(newUser.createdAt, {
      addSuffix: true,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
        createdAt: newUser.createdAt.toISOString(),
        createdAtDiff: createdAtDiff,
      },
    });
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandler(400, "Email and Password are required"));
    }

    const validUser = await userModel.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User Not Found!"));
    }

    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        path: "/",
      })
      .status(200)
      .json({
        success: true,
        message: "Login Successful",
        user: rest,
      });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

const logOutController = async (req, res, next) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",

      sameSite: "Strict",
      path: "/",
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUpController,
  loginController,
  logOutController,
};
