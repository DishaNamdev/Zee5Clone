import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import youtubeApi from "../../common/api/youtubeApi";
import { APIKey } from "../../common/api/MovieApiKey";

export const fetchAsyncVideos = createAsyncThunk(
  "videos/fetchAsyncVideos",

  async (term) => {
    // const term = "java"; // ise bad me hatana h
    const response = await youtubeApi
      .get(`?part=snippet&maxResults=20&key=${APIKey}&type=video&query=${term}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

    console.log("this is the response from API call",response.data);
    return response.data;
  }
);

// TODO: MAKE ANOTHER ASYNC FUNCTION TO FETCH THE DETAILS OF THE SELECTED VIDEO

const initialState = {
  videos: {},
  selectedVideo:null,
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
  },
});

export const getAllVideos = (state) => state.videos.videos.items;
export default videoSlice.reducer;
