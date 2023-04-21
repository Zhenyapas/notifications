import {combineReducers, configureStore } from "@reduxjs/toolkit";
import  locationsReducer  from './slices/locationsSlice';

const rootReducer = combineReducers({
    
    locations:locationsReducer

})

export function setUpStore() {

    return configureStore({

        reducer:rootReducer

    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;

export type AppDispatch = AppStore['dispatch'];