import { combineReducers } from '@reduxjs/toolkit'
import { postAPI } from '../services/PostService';

const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>