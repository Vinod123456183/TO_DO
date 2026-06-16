import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Feed from "./components/Feed/Feed.jsx";
import SearchSection from "./components/SearchSection/SearchSection.jsx";
import VideoDetail from "./components/VideoSection/VideoDetail.jsx";
import { AppContext } from "./useContextHook/useContextApi.jsx"; // Adjust path if needed

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from "./useContextHook/useTheme.jsx";

// Define the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Feed />} />
      <Route path={"/search/:searchQuery"} element={<SearchSection />} />
      <Route path={"/video/:categoryId/:videoId"} element={<VideoDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </ThemeProvider>
  </React.StrictMode>
);
