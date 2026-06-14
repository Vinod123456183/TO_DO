import React, { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

function TagInput({ tagValue, setTagValue, tags, setTags }) {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  const inputBg = isDark
    ? "bg-[#1e1e1e] text-white placeholder-gray-400"
    : "bg-[#f7f7f7] text-black placeholder-gray-500";
  const borderColor = isDark ? "border-gray-600" : "border-gray-300";
  const ringColor = isDark
    ? "focus:ring-gray-400 focus:border-gray-400"
    : "focus:ring-gray-700 focus:border-gray-700";

  const addTag = () => {
    const trimmed = tagValue.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagValue("");
    }
  };

  const removeTag = (index) => {
    const updated = [...tags];
    updated.splice(index, 1);
    setTags(updated);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto pr-1 pt-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="flex items-center bg-gray-300 text-gray-800 px-2 py-1 rounded-md text-sm"
          >
            <span>#{tag}</span>
            <button
              className="ml-2 text-red-600 hover:text-red-800 font-bold focus:outline-none"
              onClick={() => removeTag(i)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="mb-4 pt-2 pb-1">
        <p className="uppercase p-1 text-xs pb-2">add tag</p>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="#tags"
            value={tagValue}
            onChange={(e) => setTagValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTag()}
            className={`p-2 px-3 rounded-md border ${inputBg} ${borderColor} focus:outline-none focus:ring-1 ${ringColor}`}
          />
          <button
            onClick={addTag}
            className="w-8 h-8 flex items-center justify-center text-lg text-blue-800 border-2 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition font-bold"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default TagInput;
