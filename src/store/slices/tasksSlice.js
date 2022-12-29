import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import parseDb from '../../utils/parseDatabase'
import Parse from 'parse/dist/parse.min.js';
// import { db } from '../../utils/firebase';
// import { getDocs, collection } from 'firebase/firestore';
import api from '../../utils/api'
const initialState = {
    tasks: [],

}

export const getTasks = createAsyncThunk(
    'tasks/getTasksList',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const tasksList = await api.getTasks();
            console.log(tasksList)
            return tasksList;
        } catch (error) {
            return rejectWithValue((error.message))
        }
    }
)



export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (data, {rejectWithValue,dispatch}) => {
        try {
            const res = await api.createTask(data);
            console.log(res);
            // dispatch(addTask(res))
        } catch (error) {
            return rejectWithValue((error.message))
        }

        // try {
        //     const Task = new Parse.Object('Task');
        //     Task.set('title',data.title);
        //     Task.set('isCompleted', data.isCompleted);
        //     Task.set('status', 'queue');
        //     Task.set('priority', data.priority)
        //     Task.set('description', data.description)
        //     await Task.save();
        //     console.log('success');
        //     return true;
        // } catch (error) {
        //     return rejectWithValue((error.message))
        // }
    }
)

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state,action) {
            console.log(action.payload)
            state.tasks.tasks.push(action.payload)
        },
        removeTask(state, action) {

        },
        updateTask(state, action) {

        }
    },
    extraReducers: {
        [getTasks.pending]: (state) => {
            state.status = 'Loading';
        },
        [getTasks.fulfilled]: (state, action) => {
            state.status = 'Resolved';
            state.tasks = action.payload;
        },
        [getTasks.rejected]: (state, action) => {
            state.status = 'Rejected';
            state.error = action.payload;
        },

    }
})
export const { addTask, removeTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;

   
