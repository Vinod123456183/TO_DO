import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import TagInput from "./TagInput";
import axios from "axios";

function AddEditNotes({ onClose, noteData, type, fetchNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");

  const [error, setError] = useState(null);

  const { theme } = useContext(ThemeContext);
  const topRef = useRef(null);

  const isDark = theme === "dark";
  const containerBg = isDark
    ? "bg-[#141414] text-white"
    : "bg-[#e1e1e1] text-black";
  const inputBg = isDark
    ? "bg-[#1e1e1e] text-white placeholder-gray-400"
    : "bg-[#f7f7f7] text-black placeholder-gray-500";
  const borderColor = isDark ? "border-gray-600" : "border-gray-300";
  const ringColor = isDark
    ? "focus:ring-gray-400 focus:border-gray-400"
    : "focus:ring-gray-700 focus:border-gray-700";

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const randomTitle = () => {
    const titles = [
      "Wake up at 6 am",
      "Complete homework",
      "Workout session",
      "Plan the day",
      "Read a book",
      "Buy groceries",
      "Call mom",
      "Write a blog",
      "Learn React",
      "Prepare lunch",
    ];
    const index = Math.floor(Math.random() * titles.length);
    return titles[index];
  };
  const [titlePlaceholder, setTitlePlaceholder] = useState("");

  useEffect(() => {
    setTitlePlaceholder(randomTitle());
    if (type === "edit" && noteData) {
      setTitle(noteData.title || "");
      setContent(noteData.content || "");
      setTags(noteData.tags || []);
    } else {
      setTitle("");
      setContent("");
      setTags([]);
    }
  }, [noteData, type]);

  const addNewNote = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/notes/add",
        { title, content, tags },
        { withCredentials: true }
      );

      if (res.data.success) {
        setError(null);
        fetchNotes();
        onClose();
      } else {
        setError(res.data.message || "Failed to add note.");
      }
    } catch (err) {
      console.error("Add Error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Something went wrong while adding."
      );
    }
  };

  const editNotes = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/notes/edit/${noteData._id}`, // Adjust the endpoint
        { title, content, tags },
        { withCredentials: true }
      );

      if (res.data.success) {
        setError(null);
        fetchNotes();
        onClose();
      } else {
        setError(res.data.message || "Failed to update note.");
      }
    } catch (err) {
      console.error("Edit Error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Something went wrong while updating."
      );
    }
  };

  const handleAddNoteButton = () => {
    if (!title.trim() || !content.trim()) {
      setError("All Fields Are Required");
      return;
    }

    if (type === "edit") {
      editNotes();
    } else {
      addNewNote();
    }
  };

  return (
    <div
      ref={topRef}
      className={`p-4 rounded-md ${containerBg} max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent `}
    >
      <div className="mb-2">
        <p className="uppercase p-1 text-sm">title</p>
        <input
          type="text"
          placeholder={titlePlaceholder}
          className={`uppercase w-full p-3 rounded-md text-base border ${inputBg} ${borderColor} focus:outline-none focus:ring-1 ${ringColor}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <p className="uppercase p-1 text-sm">content</p>
        <textarea
          rows={8}
          placeholder="write your note here..."
          className={`uppercase w-full p-3 rounded-md resize-none border ${inputBg} ${borderColor} focus:outline-none focus:ring-1 ${ringColor}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <p className="uppercase text-xs p-1">existing tags</p>
        <TagInput
          tags={tags}
          setTags={setTags}
          tagValue={tagValue}
          setTagValue={setTagValue}
        />
      </div>

      <button
        onClick={handleAddNoteButton}
        className={`w-full mt-4 py-2 rounded-md text-white font-semibold ${
          isDark
            ? "bg-blue-700 hover:bg-blue-600"
            : "bg-blue-600 hover:bg-blue-500"
        } transition-all duration-200`}
      >
        Add Note
      </button>
    </div>
  );
}

export default AddEditNotes;
