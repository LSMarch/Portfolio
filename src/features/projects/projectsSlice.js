import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
    status: 'idle',
    data: null,
    error: null
}

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await fetch('https://api.github.com/users/LSMarch/starred')
    const data = await response.json();
    console.log(data);
    return data

})

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProjects.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const selectProjectData = state => state.projects.data

export default projectsSlice.reducer;
