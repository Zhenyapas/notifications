import { createSlice,PayloadAction } from '@reduxjs/toolkit';


export interface ILocationsData {

    loading: boolean,
    error: string,
    locations: ILocation[],

  }

interface ILocationsResponce {

    locations:ILocation[]
}
  
export interface ILocation {
    id: number
    name: string
    address1?: string
    address2: any
    city?: string
    zip?: string
    province?: string
    country: string
    phone?: string
    created_at: string
    updated_at: string
    country_code: string
    country_name: string
    province_code?: string
    legacy: boolean
    active: boolean
    admin_graphql_api_id: string
    localized_country_name: string
    localized_province_name?: string
  }

const initialState: ILocationsData= {

    loading:false,
    error: '',
    locations:[],

}

export const locationsSlice = createSlice({

    name: 'locations',

    initialState,
    
    reducers : {


        fetching(state) {

            state.loading = true;
            
        },

        fetchSuccess(state, action: PayloadAction<ILocationsResponce>){


            

            state.loading = false;
            state.locations = action.payload.locations;
           


        },

        fetchError(state, action: PayloadAction<Error>){

            state.loading = false;
            state.error = action.payload.message;
        },

    
    }

})

export default locationsSlice.reducer;