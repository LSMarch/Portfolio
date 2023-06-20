import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from '../features/portfolio/portfolioSlice';
import projectsReducer from '../features/projects/projectsSlice';

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        projects: projectsReducer
    }
})