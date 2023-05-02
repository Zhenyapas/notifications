import { INotificationData } from "../store/createNotificationSlices/createNotificationDataSlice";



export const validateNotificationData = (notificationData: INotificationData) => {


    const keys: string[] = Object.keys(notificationData);
    const errors: { [key: string]: string } = {};
  
    for (const key of keys) {

      const keyValue =  notificationData[key as keyof INotificationData];

      if (!keyValue || (Array.isArray(keyValue)) && keyValue.length === 0) {
        errors[key] = key;
      }
    }
  
    const errorKeys = Object.keys(errors);
  
    if (errorKeys.length > 0) {
      const errorMessages = errorKeys.map((key) => errors[key]);
  
      return errorMessages;
    }
  
    return null;
  };