import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { NotificationRecipient } from '../../models/notificationsResponce';


export interface IRecipientsState {

    loading: boolean,
    error: string,
    notification_recipients:NotificationRecipient[]|null

  }


  

export interface INotificationRecipentsResponce {
    notification_recipients:NotificationRecipient[]
}

const initialState: IRecipientsState = {

    loading:false,
    error:'',
    notification_recipients:null,

}

export const recipientsSlice = createSlice({

    name: 'notification_recipients',

    initialState,
    
    reducers : {


        fetching(state) {

            state.loading = true;
            
        },

        fetchSuccess(state, action: PayloadAction<NotificationRecipient[]>){


            

            state.loading = false;
            state.notification_recipients = action.payload
           


        },

        fetchError(state, action: PayloadAction<Error>){

            state.loading = false;
            state.error = action.payload.message;
        },

    
    }

})

export default recipientsSlice.reducer;