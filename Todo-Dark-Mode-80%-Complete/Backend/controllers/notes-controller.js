const noteModel = require("../models/note-model");
const { errorHandler } = require("../utils/error");

const addNotes = async (req, res, next) => {
  const { title, content, tags } = req.body;
  const { id } = req.user;

  if (!title || !content) {
    return next(errorHandler(400, "Either title or content is empty"));
  }

  try {
    const note = new noteModel({
      title,
      content,
      tags: tags || [],
      userId: id,
    });

    await note.save();

    res.status(201).json({
      success: true,
      message: "Note Added Successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};

const editNotes = async (req, res, next) => {
  const notes = await noteModel.findById(req.params.id);
  if (!notes) {
    return next(errorHandler(404, "No Notes Found"));
  }

  if (req.user.id !== notes.userId.toString()) {
    return next(errorHandler(401, "You can Only Update Your Own Notes"));
  }

  const data = req.body || {};
  const { title, content, tags, isPinned } = data;

  const hasChanges =
    title !== undefined ||
    content !== undefined ||
    tags !== undefined ||
    isPinned !== undefined;

  if (!hasChanges) {
    return next(errorHandler(400, "No Changes Provided"));
  }

  try {
    if (title !== undefined) notes.title = title;
    if (content !== undefined) notes.content = content;
    if (tags !== undefined) notes.tags = tags;
    if (isPinned !== undefined) notes.isPinned = isPinned;

    await notes.save();

    res.status(200).json({
      success: true,
      message: "Note Updated Successfully",
      note: notes,
    });
  } catch (error) {
    next(error);
  }
};

const updateNotes = async (req, res, next) => {
  try {
    const note = await noteModel.findById(req.params.id);
    if (!note) {
      return error(errorHandler(404, "Note Not Found"));
    }
    if (req.user.id !== note.userId) {
      return next(errorHandler(404, "You Can Only Update your own Note !!"));
    }
    const { isPinned } = req.body;
    note.isPinned = isPinned;
    await note.save();
    res.status(200).json({
      success: true,
      message: "Note Updated Successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};

const displayNotes = async (req, res, next) => {
  const userId = req.user.id; // Access userId from the token
  try {
    const notes = await noteModel
      .find({ userId: userId })
      .sort({ isPinned: -1 });

    res.status(200).json({
      success: true,
      message: "All Notes Retrieved Successfully",
      notes, // This is returned to the frontend
    });
  } catch (error) {
    next(error);
  }
};

const deleteNotes = async (req, res, next) => {
  const noteId = req.params.id;

  try {
    const note = await noteModel.findOne({ _id: noteId, userId: req.user.id });

    if (!note) {
      return next(errorHandler(404, "Note Not Found"));
    }

    await noteModel.deleteOne({ _id: noteId });
    res.status(200).json({
      success: true,
      message: "Note Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const pinnedFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const { isPinned } = req.body; // The isPinned value will be sent from the frontend

    // Find the note by ID and update the pin status
    const note = await noteModel.findByIdAndUpdate(
      id,
      { isPinned }, // Set the isPinned field
      { new: true } // Return the updated note
    );

    if (!note) {
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    }

    res.json({ success: true, note });
  } catch (error) {
    console.error("Pin Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

module.exports = {
  addNotes,
  editNotes,
  updateNotes,
  displayNotes,
  deleteNotes,
  pinnedFeature,
};
