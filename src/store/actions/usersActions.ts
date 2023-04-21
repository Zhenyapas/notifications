
import { userSlice } from './../slices/userSlice';
import { AppDispatch } from "../index";
import axios from "axios";
import { getUsers} from "../../axios/axios"
import { IUser} from "../../models/models";



export const fetchUsers = () => {
    return async (dispatch:AppDispatch) => {

        try {
           dispatch(userSlice.actions.fetching()); 
           const response = await  axios.request<IUser[]>(getUsers);
           dispatch(userSlice.actions.fetchSuccess(response.data));
          
        }

        catch(e) {
            dispatch(userSlice.actions.fetchError(e as Error));
        }
    }
 }


export const folowUser = (id:string) => {
    return (dispatch:AppDispatch) => {
        dispatch(userSlice.actions.folowUser(id))
    }
}

export const unfolowUser = (id:string) => {
    return (dispatch:AppDispatch) => {
        dispatch(userSlice.actions.unfolowUser(id))
    }
}

export const applyNow = (id:string) => {
    return (dispatch:AppDispatch) => {
        dispatch(userSlice.actions.applyNow(id))
    }
}

export const setCurrentPage = (page:any) => {
    return (dispatch:AppDispatch) => {
        dispatch(userSlice.actions.setCurrentPage(page))
    }
}

