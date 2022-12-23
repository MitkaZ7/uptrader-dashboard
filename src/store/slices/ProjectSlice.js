import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: [],
    tasks: [],
};
export const getProjectsList = createAsyncThunk(
    'project/getProjectsList',
    async (_,{ rejectWithValue,dispatch}) => {

    }
)
const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProject(state, action) {
            state.projects.push(action.payload)
        },
        updateProject(state, action) {

        },
       
    }
})
export const { addProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;