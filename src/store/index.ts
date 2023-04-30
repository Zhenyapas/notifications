
import {combineReducers, configureStore } from "@reduxjs/toolkit";

import  locationsReducer  from './slices/locationsSlice';
import  specificProductsReducer from './slices/specificProductsSlice';
import  createNotificationDataReducer from './slices/createNotificationDataSlice';
import  recipientsReducer from './slices/recipientsSlice';

const rootReducer = combineReducers({
    
    locations:locationsReducer,
    specificProducts:specificProductsReducer,
    notification_recipients:recipientsReducer,


    createNotificationData:createNotificationDataReducer

})

export function setUpStore() {

    return configureStore({

        reducer:rootReducer

    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;

export type AppDispatch = AppStore['dispatch'];