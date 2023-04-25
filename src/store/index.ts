
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import  locationsReducer  from './slices/locationsSlice';
import  specificProductsReducer from './slices/specificProductsSlice';


const rootReducer = combineReducers({
    
    locations:locationsReducer,
    specificProducts:specificProductsReducer

})

export function setUpStore() {

    return configureStore({

        reducer:rootReducer

    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;

export type AppDispatch = AppStore['dispatch'];