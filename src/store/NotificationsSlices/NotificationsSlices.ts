import { Root2 } from './../../models/notificationsResponce';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IResponseNotifications } from '../../models/notificationsResponce';



export interface INotificationsInitial {
    loading:boolean,
    error:string,
    data :Root2[]
}

interface FetchError {
    message: string;
  }


const initialState:INotificationsInitial = {

    loading:false,
    error:'',
    data:[]
}





export const notificationsSlice = createSlice({

    name: 'notificationsData',

    initialState,
    
    reducers : {


    
        fetching(state) {

            state.loading = true;
            
        },

        fetchSuccess(state, action: PayloadAction<IResponseNotifications>){


            

            state.loading = false;
            state.data= action.payload;
           


        },

        fetchError(state, action: PayloadAction<FetchError>){

            state.loading = false;
            state.error = action.payload.message;
        },


        deleteNotification(state, action: PayloadAction<string[]>){

           const arrIndex = [...action.payload];
  
      
           const newData = [...state.data].filter((e) => {
      
              return  !arrIndex.includes(e.id)
      
             });
      
           state.data = newData;

        },


        setLoading(state,action:PayloadAction<boolean>) {
                state.loading = action.payload;
        }



    
    }

})

export default notificationsSlice.reducer;