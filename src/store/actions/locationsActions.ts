import { getLocationsData } from './../../axios/axios';
import {locationsSlice } from './../slices/locationsSlice';
import { AppDispatch } from "../index";
import axios from "axios";
import {ILocationsResponce } from '../../models/models';




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