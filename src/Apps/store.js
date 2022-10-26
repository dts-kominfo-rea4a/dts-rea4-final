import {configureStore} from "@reduxjs/toolkit";
import NewsReducer from "../Features/newsSlice";
import AuthReducer from "../Features/authSlice";

export default configureStore({
    reducer: {
        app: NewsReducer,
        auth: AuthReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
})