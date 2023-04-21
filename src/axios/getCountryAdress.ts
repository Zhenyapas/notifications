import  axios from 'axios';

interface IAdress{

    "formatted_address" : string;
}

interface IAddressLocationResponse {
    results: IAdress,
    status: string
}



const getCountryAdress = async (func:Function,address:string) => {
    
    let parseString = address.replaceAll(' ',',').split(',');
    parseString.splice(0,1);
    let str = parseString.join().replaceAll(',','+7C%');
    console.log(str);
    const res = await axios.get<IAddressLocationResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=Stouchsburg+7C%Hendrickson+7C%Street&key=AIzaSyAQ_EbCAnxy2fLyqH7UH6Ixjdz0TRrkEQ8`);
    const parseAddress = res.data.results.formatted_address;
    func(parseAddress);
}

export default getCountryAdress;