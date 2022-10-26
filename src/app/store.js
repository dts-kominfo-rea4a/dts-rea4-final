import {configureStore} from '@reduxjs/toolkit';

import { tmdbAPI } from '../services/tmdbAPI';

export const store = configureStore({
    reducer: {
        [tmdbAPI.reducerPath]: tmdbAPI.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
            .concat(tmdbAPI.middleware)
        )
    }
});