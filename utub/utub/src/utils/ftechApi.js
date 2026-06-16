import axios from "axios";

const Base_Url = "https://www.googleapis.com/youtube/v3";
const Api_key = "AIzaSyAyXo4JUSOfcakfxtc7LeeOLdmZ18_FoCg"; // Replace with your actual API key

export const fetchApiForYoutubeData = async (endpoints, params = {}) => {
  try {
    const response = await axios.get(`${Base_Url}/${endpoints}`, {
      params: {
        ...params,
        key: Api_key, // Make sure the API key is correct
      },
    });

    // Log the entire response to inspect the structure
    console.log("API Response:", response); // This will show the full response, including headers, status, etc.

    return response.data; // Return the actual response data object
  } catch (error) {
    console.error("Error Fetching YouTube Data:", error);
    return null; // In case of an error, return null
  }
};
