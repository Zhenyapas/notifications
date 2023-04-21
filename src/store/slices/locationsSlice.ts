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
    locations:[{id	:	79534555410,
        name	:	'My Custom Location',
        address1	:	'123 Main St',
        address2	:	null,
        city	:	'Toronto',
        zip	:	'A1A 1A1',
        province	:	'Ontario',
        country	:	'CA',
        phone	:	'555-5555',
        created_at	:	'2023-03-11T09:55:02-05:00',
        updated_at	:	'2023-03-11T09:55:03-05:00',
        country_code	:	'CA',
        country_name	:	'Canada',
        province_code	:	'ON',
        legacy	:	false,
        active	:	true,
        admin_graphql_api_id	:	'gid://shopify/Location/79534555410',
        localized_country_name	:	'Canada',
        localized_province_name	:	'Ontario',
    }
        ],

}

export const locationsSlice = createSlice({

    name: 'locations',

    initialState,
    
    reducers : {


        fetching(state) {

            state.loading = true;
            console.log(state.loading);
        },

        fetchSuccess(state, action: PayloadAction<ILocationsResponce>){


            

            state.loading = false;
            state.locations = action.payload.locations;
            console.log(action.payload);


        },

        fetchError(state, action: PayloadAction<Error>){

            state.loading = false;
            state.error = action.payload.message;
        },

    
    }

})

export default locationsSlice.reducer;