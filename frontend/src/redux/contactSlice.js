import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitContactForm = createAsyncThunk("contact/submitForm", async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  return formData;
});

const contactSlice = createSlice({
  name: "contact",
  initialState: { status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => { state.status = "loading"; })
      .addCase(submitContactForm.fulfilled, (state) => { state.status = "succeeded"; })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
