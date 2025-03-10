import {configureStore } from '@reduxjs/toolkit'
import destinationSlice from "./Components/slice"
import createSagaMiddleware from 'redux-saga';
import { watchFetchDestinations } from './Components/saga';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        destinations: destinationSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(watchFetchDestinations);