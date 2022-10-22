import {configureStore} from "@reduxjs/toolkit";
import NewsReducer from "../Features/newsSlice";

export default configureStore({
    reducer: {
        app: NewsReducer
    }
})