
const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export const getUsers = {

    method: 'GET',
    url: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
    headers: { Authorization: ` Bearer ${token} `}
};


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