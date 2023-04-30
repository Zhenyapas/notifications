import { getNotificationsData,deleteNotificationAxios, postNewNotification } from './../../axios/axios';
import { getLocationsData,getSpecificProductsData} from '../../axios/axios';
import {locationsSlice } from '../createNotificationSlices/locationsSlice';
import { AppDispatch } from "../index";
import axios from "axios";
import { specificProductsSlice } from '../createNotificationSlices/specificProductsSlice';
import {createNotificationDataSlice, INotificationData} from '../createNotificationSlices/createNotificationDataSlice';
import { recipientsSlice} from '../createNotificationSlices/recipientsSlice';
import { IResponseNotifications, NotificationRecipient } from '../../models/notificationsResponce';
import { notificationsSlice } from '../NotificationsSlices/NotificationsSlices';



export const fetchNotificationData = () => {
  return async (dispatch:AppDispatch) => {

      try {

         dispatch(recipientsSlice.actions.fetching()); 
         dispatch(notificationsSlice.actions.fetching()); 
         const response:IResponseNotifications = await  (await axios.request(getNotificationsData)).data;

        // set Notifications Data
         dispatch(notificationsSlice.actions.fetchSuccess(response));

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


 export const deleteNotification = (indexArr:string[]) => {
  return async (dispatch:AppDispatch) => {

      try {

         dispatch(notificationsSlice.actions.fetching());
         
         dispatch(notificationsSlice.actions.deleteNotification(indexArr));

         const deletePromises = indexArr.map(id => axios.request(deleteNotificationAxios(id)));

    
         const results = await Promise.allSettled(deletePromises);

         results.forEach((result, index) => {
           if (result.status === 'rejected') {
             console.log(`Запрос с id ${indexArr[index]} завершился ошибкой: ${result.reason}`);
           } else { console.log(result)};
         });

         dispatch(notificationsSlice.actions.setLoading(false))

         


      }


      catch(e) {
          console.log(e);
          dispatch(specificProductsSlice.actions.fetchError(e as Error));
      }
  }
}



export const postNewNote = (data:INotificationData) => {
  return async (dispatch:AppDispatch) => {

      try {

         dispatch(notificationsSlice.actions.fetching());

         const post = await axios.request(postNewNotification(data));
         const response:IResponseNotifications = await  (await axios.request(getNotificationsData)).data;

         dispatch(notificationsSlice.actions.fetchSuccess(response));
         dispatch(notificationsSlice.actions.setLoading(false))

      }
      catch(e) {
          console.log(e);
          dispatch(createNotificationDataSlice.actions.fetchError(e as Error));
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




