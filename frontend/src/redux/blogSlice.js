import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return data.posts;
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [], 
    status: "idle", 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; // Fix: Use 'data' instead of 'blogs'
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
