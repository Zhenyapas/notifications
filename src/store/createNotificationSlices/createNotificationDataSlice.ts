import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { NotificationRecipient } from '../../models/notificationsResponce';


export interface INotificationData {

  notification_recipients: object[]
  selected_products: object[]
  name: string
  days_to_send: string[],
  send_hour: number|string,
  time_zone: number|string,
  locations: string[],
  low_inventory_threshold:number|string

}

 interface INotificationsState {

  loading:boolean,
  error:string,
  data :INotificationData
 }

 const initialState: INotificationsState = {
  loading:false,
  error:'',
  data: {
    notification_recipients: [

      {
      }
    ],
    selected_products: [
 
    ],
    name: '',
    days_to_send: [
      
    ],
    send_hour: 0,
    time_zone: 0,
    locations: [
      ""
    ],
    low_inventory_threshold: 0
  }
};

export const createNotificationDataSlice = createSlice({

    name: 'createtNotificationData',

    initialState,
    
    reducers : {


      fetchError(state, action: PayloadAction<Error>){

        state.loading = false;
        state.error = action.payload.message;
      },


        setSelectedProducts(state,action:PayloadAction<object[]>) {

          
            state.data.selected_products = action.payload;
          

        },

        setLocations(state,action:PayloadAction<string[]>) {

            state.data.locations = action.payload
        },

        setNotificationName(state,action:PayloadAction<string>) {

          state.data.name = action.payload
      },

      setNotificationRecipients(state,action:PayloadAction<NotificationRecipient[]>) {

        state.data.notification_recipients = action.payload
      },


      setDaysToSend(state,action:PayloadAction<string[]>) {

        state.data.days_to_send = action.payload
      },

      setHours(state,action:PayloadAction<number>) {

        state.data.send_hour = action.payload
      },

      setTimeZone(state,action:PayloadAction<number>) {

        state.data.time_zone = action.payload
      },


      setThreshold(state,action:PayloadAction<number>) {

        state.data.low_inventory_threshold= action.payload
      },






        

    
    }

})

export default createNotificationDataSlice.reducer;