import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    tasks: [],
    loading: false,
    error: false,
}

export const getAllTasks = createAsyncThunk(
    'task/getAllTasks',
      async (_, { rejectWithValue, dispatch }) => {
       
    }
)

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state,action) {
            state.tasks.push(action.payload)
        },
        removeTask(state, action) {

        },
        updateTask(state, action) {

        }
    }
})
export const { addTask, removeTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;
// import { addDoc, getDoc, getDocs, collection, Timestamp } from '@firebase/firestore'
// import { db } from '../../utils/firebase'

// export const getInitialTasks = createAsyncThunk(
//     'task/getInitialTasks',
    // async (_, { rejectWithValue, dispatch }) => {
    //         await getDocs(collection(db,'tasks'))
    //            .then((querySnapshot) => {
    //                const taskList = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}));
    //                console.log(taskList)
    //                dispatch(addTask(taskList))
              
    //        })
            
      
//     }
// )
// export const createTask = createAsyncThunk(
//     'tasks/createTask',
//     async (data, { rejectWithValue, dispatch, getState }) => {
//         try {
//             const ref = collection(db, 'tasks');
//             addDoc(ref, data)
//             dispatch(addTask(data))
//             getInitialTasks();  
//             console.log(getState().tasks.tasks)       
//         } catch (error) {
//             return rejectWithValue((error.message))
//         }
//     }
// )

// const initialState = {
//     tasks: [],
// }
// const taskSlice = createSlice({
//     name: 'task',
//     initialState,
    
//     reducers: {
//         addTask(state, action) {
//             // console.log(action.payload)
//             state.task.tasks.push(action.payload);
//         },
//         removeTask(state, action) {

//         },
//         updateTask(state, action) {

//         }

//     },
//     // extraReducers: {
//     //     [getInitialTasks.pending]: (state) => {
//     //         state.status = 'Loading';
//     //     },
//     //     [getInitialTasks.fulfilled]: (state, action) => {
//     //         state.status = 'Resolved';
//     //         state.tasks = action.payload;
//     //     },
//     //     [getInitialTasks.rejected]: (state, action) => {
//     //         state.status = 'Rejected';
//     //         state.error = action.payload;
//     //     },

//     // }
// })
// export const { addTask } = taskSlice.actions;
// export default taskSlice.reducer;