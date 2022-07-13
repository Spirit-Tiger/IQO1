import { configureStore} from "@reduxjs/toolkit";
import { postAPI } from "../services/PostService";
import rootReducer from "./rootReducer";


export const setupStore = () => {
    return configureStore ({ 
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postAPI.middleware),
    })
}
