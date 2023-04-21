import  axios from 'axios';

interface IAdress{

    "compound_code" : string;
}
interface ILocationResponse {
    'plus_code': IAdress
}

const getCountryCoordinates = async (func:Function,x:string,y:string) => {
    const res = await axios.get<ILocationResponse>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${x},${y}&language=en&key=AIzaSyAQ_EbCAnxy2fLyqH7UH6Ixjdz0TRrkEQ8`);
    const adress = res.data.plus_code.compound_code;
    func(adress);
}

export default  getCountryCoordinates;