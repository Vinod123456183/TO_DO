const mongoose = require("mongoose");
const debug = require("debug")("app:db");

mongoose.set("strictQuery", true); // ✅ Important for Mongoose 7+

mongoose
  .connect(process.env.MONGO_DB_ATLAS_URI)
  .then(() => console.log("✅✅✅ Connected to MongoDB Atlas ✅✅✅"))
  .catch((err) =>
    console.log("❌❌❌ Error connecting to MongoDB Atlas ❌❌❌", err)
  );

const db = mongoose.connection;

db.on("error", (err) =>
  debug("❗❌ MongoDB Atlas connection error: ❌❗", err)
);
db.once("open", () =>
  debug("✅ MongoDB Atlas connection established ✅")
);

module.exports = db;
