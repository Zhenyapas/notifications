import { getNotificationsData } from './../../axios/axios';
import { getLocationsData,getSpecificProductsData} from '../../axios/axios';
import {locationsSlice } from '../slices/locationsSlice';
import { AppDispatch } from "../index";
import axios from "axios";
import { specificProductsSlice } from '../slices/specificProductsSlice';
import {createNotificationDataSlice} from '../slices/createNotificationDataSlice';
import { recipientsSlice} from '../slices/recipientsSlice';
import { IResponseNotifications, NotificationRecipient } from '../../models/notificationsResponce';



export const fetchNotificationData = () => {
  return async (dispatch:AppDispatch) => {

      try {

         dispatch(recipientsSlice.actions.fetching()); 
         const response:IResponseNotifications = await  (await axios.request(getNotificationsData)).data;

        //set notification_recipients data
         const recipientsData: NotificationRecipient[] = response.map(obj => obj.notification_recipients).flat(); 
         dispatch(recipientsSlice.actions.fetchSuccess(recipientsData));
        
      }

      catch(e) {
          console.log(e);
          dispatch(specificProductsSlice.actions.fetchError(e as Error));
      }
  }
}

export const fetchLocations = () => {
    return async (dispatch:AppDispatch) => {

        try {

           dispatch(locationsSlice.actions.fetching()); 
           const response = await  axios.request(getLocationsData);
           dispatch(locationsSlice.actions.fetchSuccess(response.data));
          
        }

        catch(e) {
            console.log(e);
            dispatch(locationsSlice.actions.fetchError(e as Error));
        }
    }
 }

 export const fetchProducts = () => {
    return async (dispatch:AppDispatch) => {

        try {

           dispatch(specificProductsSlice.actions.fetching()); 
           const response = await  axios.request(getSpecificProductsData);
           dispatch(specificProductsSlice.actions.fetchSuccess(response.data));
          
        }

        catch(e) {
            console.log(e);
            dispatch(specificProductsSlice.actions.fetchError(e as Error));
        }
    }
 }


interface SelectedObj {
        selected: string[];
        subSelected: { [key: string]: string[] };
      }

interface SelectedProduct {
        product_id: string;
        product_variants_ids: string[];
      }

 export const setSelectedProducts = (data:SelectedObj) => {


      
      function convertData(selectedObj: SelectedObj): SelectedProduct[] {
        const selectedProducts: SelectedProduct[] = [];


        console.log(selectedObj);
        selectedObj.selected.push(...Object.keys(selectedObj.subSelected))
         

        
      
        Array.from(new Set(selectedObj.selected)).forEach((id) => {
          const variants = selectedObj.subSelected[id];
          selectedProducts.push({
            product_id: id,
            product_variants_ids: variants || []
          });
        });
      
        return selectedProducts;
      }
      

    return (dispatch:AppDispatch) => {
        dispatch(createNotificationDataSlice.actions.setSelectedProducts(convertData(data)))
    }
}



export const setLocations = (data:string[]) => {

  return (dispatch:AppDispatch) => {

      dispatch(createNotificationDataSlice.actions.setLocations(data));

  }


}


export const setNameNotification = (str:string) => {

  return (dispatch:AppDispatch) => {

      dispatch(createNotificationDataSlice.actions.setNotificationName(str));

  }


}


export const setDaysToSend = (arr:string[]) => {

  return (dispatch:AppDispatch) => {

    dispatch(createNotificationDataSlice.actions.setDaysToSend(arr));

}
}


export const setHour = (hour:number) => {

  return (dispatch:AppDispatch) => {

    dispatch(createNotificationDataSlice.actions.setHours(hour));

}
}


export const setTimeZone = (hour:number) => {

  return (dispatch:AppDispatch) => {

    dispatch(createNotificationDataSlice.actions.setTimeZone(hour));

}
}


export const setThreshold = (threshold:number) => {

  return (dispatch:AppDispatch) => {

    dispatch(createNotificationDataSlice.actions.setThreshold(threshold));

}
}





export const setNotificationRecipients= (obj:NotificationRecipient[]) => {

  return (dispatch:AppDispatch) => {

      dispatch(createNotificationDataSlice.actions.setNotificationRecipients(obj));

  }


}




