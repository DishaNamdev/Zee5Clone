import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./movies/videoSlice";

export const store = configureStore({
    reducer:{
        videos: videosReducer
    },
});