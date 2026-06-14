const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verify-token");
const {
  addNotes,
  editNotes,
  updateNotes,
  displayNotes,
  deleteNotes,
  pinnedFeature
} = require("../controllers/notes-controller");

router.post("/add", verifyToken, addNotes);
router.post("/edit/:id", verifyToken, editNotes);
router.put("/update/:id", verifyToken, updateNotes);
router.get("/display", verifyToken, displayNotes);
router.delete("/delete/:id", verifyToken, deleteNotes);
router.put("/pin/:id", verifyToken, pinnedFeature);

module.exports = router;
