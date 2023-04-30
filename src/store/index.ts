
import {combineReducers, configureStore } from "@reduxjs/toolkit";

import  locationsReducer  from './createNotificationSlices/locationsSlice';
import  specificProductsReducer from './createNotificationSlices/specificProductsSlice';
import  createNotificationDataReducer from './createNotificationSlices/createNotificationDataSlice';
import  recipientsReducer from './createNotificationSlices/recipientsSlice';
import  notificationsReducer from './NotificationsSlices/NotificationsSlices';

const rootReducer = combineReducers({
    
    locations:locationsReducer,
    specificProducts:specificProductsReducer,
    notification_recipients:recipientsReducer,


    notificationsData:notificationsReducer,
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