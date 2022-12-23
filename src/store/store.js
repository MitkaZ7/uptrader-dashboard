import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/taskSlice';
import projectSlice from './slices/projectSlice'

export default configureStore ({
    reducer: {
        task: taskSlice,
        project: projectSlice,
    }
       
})