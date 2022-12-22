import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask(state, action) {

        },
        removeTask(state, action) {

        },
        updateTask(state, action) {

        }

    },
})

export default taskSlice.reducer;