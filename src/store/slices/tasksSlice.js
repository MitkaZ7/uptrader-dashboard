import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    tasks: [],
    loading: false,
    error: false,
}
export const getInitialTasks = createAsyncThunk(
    'task/getInitialTasks',
    async (_, { rejectWithValue, dispatch }) => {
      
    }
)

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state,action) {
            console.log(action.payload)
            state.tasks.tasks.push(action.payload)
            // const docRef = addDoc(tasksCollection, {
            //     name: "Paris",
            //     country: "Hilton"
            // });
            // console.log("Document written with ID: ", docRef.id);
          
        },
        removeTask(state, action) {

        },
        updateTask(state, action) {

        }
    }
})
export const { addTask, removeTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;

   
