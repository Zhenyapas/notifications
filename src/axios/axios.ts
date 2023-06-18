import { INotificationData } from "../store/createNotificationSlices/createNotificationDataSlice";


export const getLocationsData = {

    method: 'GET',
    url: 'https://stock-notify-381217.ue.r.appspot.com/api/locations/',
};

export const getSpecificProductsData = {

    method: 'GET',
    url: 'https://stock-notify-381217.ue.r.appspot.com/api/products/',
};


export const getNotificationsData = {
    method: 'GET',
    url: 'https://stock-notify-381217.ue.r.appspot.com/api/notifications/',
    headers: {
      'accept': 'application/json',
      'X-CSRFToken': '1AmLZbQ4XqlURze9d1dTNqsw6f7fRYs0U9owEtjlGhD8dTpeQicSmerC8XslScxg'
    }
}


export const getNotificationById = (id:string) => {

  console.log(id);
    
  return {
          method: 'GET',
          url: `https://stock-notify-381217.ue.r.appspot.com/api/notifications/${id}/`,
          headers: {
              'accept': 'application/json',
              'X-CSRFToken': 'eJIs6qAVJjP1Z9hVvfADzH6gnC73b9kA2BsUriSKq5OsufqzmOYEYqmJSKvoBfrE'
            }
          }
}


export const deleteNotificationAxios = (id:string) => {
    
    return {
            method: 'DELETE',
            url: `https://stock-notify-381217.ue.r.appspot.com/api/notifications/${id}/`,
            headers: {
                'accept': 'application/json',
                'X-CSRFToken': '1AmLZbQ4XqlURze9d1dTNqsw6f7fRYs0U9owEtjlGhD8dTpeQicSmerC8XslScxg'
              }
            }
}



export const postNewNotification = (data:INotificationData) => {


    const headers = {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': '8AjnfiPUMychlHKxPY9KNsBJLd1eVvLfToa5z8nqRoG5evHtX2hVW5rDw2IQoSa6',
      };
      
      const config = {
        method: 'POST',
        url: 'https://stock-notify-381217.ue.r.appspot.com/api/notifications/',
        headers,
        data,
      };
    
    return config
}