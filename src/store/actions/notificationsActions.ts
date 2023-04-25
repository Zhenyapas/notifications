import { getLocationsData,getSpecificProductsData} from '../../axios/axios';
import {locationsSlice } from '../slices/locationsSlice';
import { AppDispatch } from "../index";
import axios from "axios";
import { specificProductsSlice } from '../slices/specificProductsSlice';





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

