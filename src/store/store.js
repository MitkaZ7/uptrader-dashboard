import { configureStore } from '@reduxjs/toolkit';
import TaskSlice from './slices/TaskSlice';
import ProjectsSlice from './slices/ProjectsSlice';
export default configureStore ({
    reducer: {
        tasks: TaskSlice,
        projects: ProjectsSlice,
    }
       
})