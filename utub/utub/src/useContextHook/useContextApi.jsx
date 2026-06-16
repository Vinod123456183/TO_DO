// useContextHook/useContextApi.js (or wherever you define the context)

import { useContext, useEffect, useState, createContext } from "react";
import { fetchApiForYoutubeData } from "../utils/ftechApi";

// Create the context
export const Context = createContext();

export const AppContext = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const [mobilemenu, setMobileMenu] = useState(false);

  // Function to fetch YouTube video data
  const fetchYouTubeData = async (params) => {
    setLoading(true);
    try {
      const res = await fetchApiForYoutubeData("videos", params);

      if (res && res.items) {
        setVideoData(res.items);
        console.log("Video Data:", res.items); // Log the 'items' array to ensure data is received
      } else {
        console.log("No video data found or empty response.");
      }
    } catch (error) {
      console.error("Error Fetching YouTube:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch video data when category changes
  useEffect(() => {
    if (selectedCategory === "Home") {
      fetchYouTubeData({
        part: "snippet,contentDetails,statistics",
        regionCode: "IN",
        maxResults: 10,
      });
    } else {
      fetchYouTubeData({
        part: "snippet,contentDetails,statistics",
        regionCode: "IN",
        chart: "mostPopular",
        maxResults: 10,
        videoCategoryId: selectedCategory,
      });
    }
  }, [selectedCategory]); // Re-fetch data whenever the selected category changes

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        mobilemenu,
        setMobileMenu,
        videoData,
        setVideoData,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};
