import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import youtubeApi from "../../common/api/youtubeApi";
import { APIKey } from "../../common/api/MovieApiKey";
import youtubeVideoDetailApi from "../../common/api/youtubeVideoDetailApi";

export const fetchAsyncVideos = createAsyncThunk(
  "videos/fetchAsyncVideos",

  async (term) => {
    // const term = "java"; // ise bad me hatana h
    console.log("checking fetchasync", term);
    const response = await youtubeApi
      .get(`?part=snippet&maxResults=20&key=${APIKey}&type=video&q=${term}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

    console.log("this is the response from API call", response.data);
    return response.data;
  }
);

export const fetchAsyncVideoDetails = createAsyncThunk(
  "videos/fetchAsyncVideoDetails",

  async (videoID) => {
    const response = await youtubeVideoDetailApi.get(`?id=${videoID.videoId}&key=${APIKey}&part=snippet`)
    .catch((err)=>{
      console.log("Error inside the details api", err);
    });

    console.log("response from detail api",response);
    return response.data;
  }
);

// TODO: MAKE ANOTHER ASYNC FUNCTION TO FETCH THE DETAILS OF THE SELECTED VIDEO

const initialState = {
  videos: {},
  selectedVideo: {},
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    removeSelectedVideo: (state) => {
      state.selectedVideo = {};
    },
  },
  extraReducers: {
    [fetchAsyncVideos.pending]: () => {
      console.log("Loading....");
    },

    [fetchAsyncVideos.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully....");
      return { ...state, videos: payload };
    },
    [fetchAsyncVideos.rejected]: () => {
      console.log("Failed....");
    },

    [fetchAsyncVideoDetails.fulfilled]: (state,{payload})=>{
      console.log("Details payload", payload);
      return {...state,selectedVideo: payload};
    },

    [fetchAsyncVideoDetails.rejected]:()=>{
      console.log("details request rejected...........");
    }
  },
});

export const getAllVideos = (state) => state.videos.videos.items;
export const getVideoDetails = (state)=> state.videos.selectedVideo;
export default videoSlice.reducer;
