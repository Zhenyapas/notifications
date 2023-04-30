import { createSlice,PayloadAction } from '@reduxjs/toolkit';


interface ILatLong {
    lat: string,
    long: string,
}

 interface IUser {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: Array<string>,
    location: ILatLong
    pictures: Array<string>,
    createdAt: string,
    updatedAt: string,
    description: string,
    employment_type: Array<string>

}



export interface userData {

    loading: boolean,
    error: string,
    users: IUser[],
    pined: string[],
    applyList:string[],
    currentPage:string| number,


}
const initialState: userData = {

    loading:false,
    error: '',
    users:[],
    pined:['635ee6d3ece4a5643d58f4bd','635ee6d374cb23dcaf624aeb'],
    applyList:[],
    currentPage:'1',


}

export const userSlice = createSlice({

    name: 'users',

    initialState,
    
    reducers : {

     fetching(state) {

        state.loading = true;
     },

     fetchSuccess(state, action: PayloadAction<IUser[]>){

        state.loading = false;
        state.users = action.payload
     },

     fetchError(state, action: PayloadAction<Error>){

        state.loading = false;
        state.error = action.payload.message;
    },

    folowUser(state, action:PayloadAction<string>){

       if(!state.pined.includes(action.payload))  state.pined.push(action.payload);
    },
    unfolowUser(state,action:PayloadAction<string>){

        const index = state.pined.findIndex(e => e === action.payload);
        state.pined = state.pined.filter((e:string):boolean => e !== state.pined[index]);

    },
    applyNow(state,action:PayloadAction<string>){

        const index = state.pined.findIndex(e => e === action.payload);
        state.applyList = state.pined.filter((e:string):boolean => e !== state.applyList[index]);
    },
    setCurrentPage(state,action:PayloadAction<string>){

        state.currentPage = action.payload
    
    }
    
    }

})

export default userSlice.reducer;