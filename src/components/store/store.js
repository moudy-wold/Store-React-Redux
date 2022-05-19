import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducres/reducerSlice';






export const store = configureStore({
    reducer: {
        userData: userSlice
    },
})
