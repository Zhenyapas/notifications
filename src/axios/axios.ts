
const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export const getUsers = {

    method: 'GET',
    url: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
    headers: { Authorization: ` Bearer ${token} `}
};


export const getLocationsData = {

    method: 'GET',
    url: 'https://stock-notify-381217.ue.r.appspot.com/api/locations/',
    headers: {'Access-Control-Allow-Origin' : '*'}

};

