import React, { useContext } from "react";
import { ThemeContext } from "../components/utils/ThemeContext";
import { FaTags } from "react-icons/fa6";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import { format } from "date-fns"; // Import date formatting function

function NoteCard({
  title,
  content,
  date,
  tags,
  note,
  isPinned,
  onEdit,
  onDelete,
  onPinnedNoteFunction,
}) {
  const { theme } = useContext(ThemeContext);

  const borderClass = theme === "light" ? "border-[#c0bebe]" : "border-[#444]";
  const textColor = theme === "light" ? "text-[#090909]" : "text-white";
  const nameColor = theme === "light" ? "text-[#222222]" : "text-[#dddddd]";
  const dateColor = theme === "light" ? "text-[#666666]" : "text-[#aaaaaa]";
  const tagColor = theme === "light" ? "text-[#888888]" : "text-[#555]";
  const pinTheme = theme === "light" ? "text-blue-500" : "text-blue-500"; // Both theme types use blue-500 in this case
  const pinTheme2 = theme === "light" ? "text-gray-800" : "text-gray-300"; // Both theme types use blue-500 in this case

  const formattedDate = date ? format(new Date(date), "MMM dd, yyyy") : "";

  return (
    <div
      className={`border max-w-80 p-3 rounded-md hover:shadow-xl transition-all ease-in-out
         ${borderClass} ${textColor}`}
    >
      <div className="flex items-center justify-between">
        <div className="p-1">
          <p className={`font-semibold ${nameColor}`}>{title}</p>
          <p className={`text-sm pt-2 font-semibold  ${dateColor}`}>
            {formattedDate}
          </p>
        </div>
        <div>
          <MdOutlinePushPin
            size={19}
            className={`hover:text-blue-500 ${isPinned ? pinTheme : pinTheme2}`}
            onClick={onPinnedNoteFunction} // Trigger the toggle function
          />
        </div>
      </div>

      <div className="p-1 text-sm mt-2">
        <p>
          {content
            ? content.slice(0, 20) + (content.length > 20 ? "..." : "")
            : ""}
        </p>
        <div className={`pt-3 text-xs flex justify-between ${tagColor}`}>
          <div>
            {tags && tags.length > 0 ? (
              <>
                {tags.slice(0, 5).map((tag, index) => (
                  <span key={index} className="mr-2">
                    <FaTags size={12} className="inline mr-1" />
                    {tag}
                  </span>
                ))}
                {tags.length > 5 && <span className="mr-2">... </span>}{" "}
              </>
            ) : (
              "No tags"
            )}
          </div>
          <div className="flex items-center gap-2">
            <MdCreate onClick={onEdit} className="icon-btn hover:text-green" />
            <MdDelete
              onClick={onDelete}
              className="icon-btn hover:text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
