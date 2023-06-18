import { Root2 } from './../../models/notificationsResponce';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IResponseNotifications } from '../../models/notificationsResponce';



export interface INotificationsInitial {
    loading:boolean,
    error:string,
    data :Root2
}

interface FetchError {
    message: string;
  }


const initialState:INotificationsInitial = {

    loading:false,
    error:'',
    data:{
        id: '',
        notification_recipients:[],
        selected_products:[],
        name: '',
        days_to_send: [],
        send_hour: 0,
        time_zone: 0,
        low_inventory_threshold:0,
        locations:[]
    }
}





export const editNotificationSlice = createSlice({

    name: 'editNotification',

    initialState,
    
    reducers : {


    
        fetching(state) {

            state.loading = true;
            
        },

        fetchSuccess(state, action: PayloadAction<Root2>){

            state.loading = false;
            state.data= action.payload;
           
        },

        fetchError(state, action: PayloadAction<FetchError>){

            state.loading = false;
            state.error = action.payload.message;
        },


    
    }

})

export default editNotificationSlice.reducer;