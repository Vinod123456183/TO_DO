const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.set("view engine", "ejs");

// const db = require("./config/mongoose-connection");
const db = require("./config/mongoose-connection");
const indexRouter = require("./routes/index-router");
const notesRouter = require("./routes/notes-router");

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({
    success: false,
    message,
  });
});

app.use("/", indexRouter);
app.use("/notes", notesRouter);
app.listen(process.env.PORT);
