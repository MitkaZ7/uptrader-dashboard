import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: [],
    tasks: [],
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProject(state, action) {
            state.projects.push(action.payload)
        },
        updateProject(state, action) {

        },
        getProjectsList(state, action) {

        },
    }
})
export default projectSlice.reducer;