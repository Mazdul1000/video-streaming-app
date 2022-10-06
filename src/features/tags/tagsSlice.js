import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsAPI";

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}

// async thunk function
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags();
    return tags;
});

const tagSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTags.pending, (state)=> {
            state.isError = false;
            state.isLoading = true;
             
            
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;

        })
        .addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }
});

export default tagSlice.reducer;