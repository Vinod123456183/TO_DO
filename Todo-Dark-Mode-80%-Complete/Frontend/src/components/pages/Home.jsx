import React, { useContext, useState, useEffect } from "react";
import Header from "../pages/Header";
import NoteCard from "../NoteCard";
import Modal from "react-modal";
import { ThemeContext } from "../utils/ThemeContext";
import AddEditNotes from "./AddEditNotes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
Modal.setAppElement("#root");

function Home() {
  const [notes, setNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const [openModel, setOpenModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || Object.keys(currentUser).length === 0) {
      navigate("/login");
      return; // Early return to prevent rendering the home page
    } else {
      setUserInfo(currentUser);
      getAllNotes();
    }
  }, [currentUser, navigate]);

  // Early return here to ensure that nothing is rendered if no user is logged in
  if (!currentUser || Object.keys(currentUser).length === 0) {
    return null;
  }

  const { theme } = useContext(ThemeContext); // 👈 Access the current theme
  const bgColor =
    theme === "dark"
      ? "bg-[#141414] text-[#F9FAFB]" // Light: light gray bg, deep slate text
      : "bg-[#e1e1e1] text-[#141414]"; // Dark: deep blue-gray bg, soft white text

  const textColor = theme === "dark" ? "text-[#fff]" : "text-[#141414]";

  const getAllNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/notes/display", {
        withCredentials: true,
      });

      if (res.data.success === false) {
        return setError(res.data.message);
      }

      setNotes(res.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (note) => {
    setOpenModel({ isShown: true, type: "edit", data: note });
  };

  const deleteNote = async (note) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/notes/delete/${note._id}`, // Ensure note._id is included
        { withCredentials: true }
      );
      if (res.data.success) {
        getAllNotes();
      } else {
        console.log(res.data);
      }
    } catch (error) {
      console.error(
        "Error deleting note:",
        error.response?.data || error.message
      );
    }
  };

  const updateIsPinned = async (note) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/notes/pin/${note._id}`,
        { isPinned: !note.isPinned }, // Toggle pin status
        { withCredentials: true }
      );

      if (res.data.success) {
        getAllNotes(); // Refresh the notes list after updating pin status
      } else {
        console.log(
          "Error:",
          res.data.message || "Failed to update pin status"
        );
      }
    } catch (error) {
      console.log("Error updating pin status:", error);
    }
  };

  return (
    <>
      <Header />

      <div className=" px-4 md:px-6 lg:px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteCard
              key={note._id}
              title={note.title}
              content={note.content}
              date={note.createdAt}
              tags={note.tags}
              note={note}
              isPinned={note.isPinned}
              onEdit={() => handleEdit(note)}
              onDelete={() => deleteNote(note)}
              onPinnedNoteFunction={() => updateIsPinned(note)}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No notes found.
          </p>
        )}
      </div>

      <button
        onClick={() => setOpenModel({ isShown: true, type: "add", data: null })}
        className="h-16 w-16 flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 fixed right-10 lg:right-16 bottom-14 text-white text-3xl shadow-lg"
      >
        +
      </button>
      <Modal
        isOpen={openModel.isShown} //is it open already
        onRequestClose={() =>
          setOpenModel({ isShown: false, type: "add", data: null })
        }
        className={` ${bgColor} relative rounded-lg  w-[90%] max-w-xl mx-auto mt-5 outline-none shadow-lg }  `}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50"
      >
        <button
          onClick={() =>
            setOpenModel({ isShown: false, type: "add", data: null })
          }
          className={`absolute top-1 right-2 w-10 h-10  flex items-center justify-center rounded-full text-3xl transition-all ${textColor}`}
        >
          &times;
        </button>

        <AddEditNotes
          onClose={() =>
            setOpenModel({ isShown: false, type: "add", data: null })
          }
          noteData={openModel.data}
          type={openModel.type}
          fetchNotes={getAllNotes}
        />
      </Modal>
    </>
  );
}

export default Home;
