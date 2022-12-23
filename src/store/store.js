import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/taskSlice';

export default configureStore ({
    reducer: {
        task: taskSlice,
        // projects: ProjectSlice,
    }
       
})