import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { NotificationRecipient } from '../../models/notificationsResponce';


interface INotificationData {

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
      {
        product_id: "string",
        product_variants_ids: [
          "string"
        ]
      },
   {
        product_id: "string2",
        product_variants_ids: [
          
        ]
      }
    ],
    name: "string",
    days_to_send: [
      "MON"
    ],
    send_hour: 2147483647,
    time_zone: 2147483647,
    locations: [
      "string"
    ],
    low_inventory_threshold: 2147483647
  }
};

export const createNotificationDataSlice = createSlice({

    name: 'createtNotificationData',

    initialState,
    
    reducers : {


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