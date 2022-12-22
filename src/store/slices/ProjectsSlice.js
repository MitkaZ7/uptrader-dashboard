import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: []
    },
    reducers: {
        addProject(state, action) {

        },
        updateProject(state, action) {

        },
        getProjectsList(state, action) {

        },
    }
})
export default projectsSlice.reducer;