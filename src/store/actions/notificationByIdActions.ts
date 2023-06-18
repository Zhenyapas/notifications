import { Root2 } from './../../models/notificationsResponce';

import axios from 'axios';
import { getNotificationById } from '../../axios/axios';
import { editNotificationSlice } from '../editNotificationSlices/EditNotificationSlices';
import { AppDispatch } from '../index';





export const fetchNotificationById = (id:string) => {
    return async (dispatch:AppDispatch) => {
  
        try {
  
           dispatch(editNotificationSlice.actions.fetching()); 
          
           const response = await axios.request(getNotificationById(id));
           const responseData:Root2 = response.data;
  
           dispatch(editNotificationSlice.actions.fetchSuccess(responseData));
  
        
          
        }
  
        catch(e) {
            console.log(e);
            dispatch(editNotificationSlice.actions.fetchError(e as Error));
        }
    }
  }