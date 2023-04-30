import { createSlice,PayloadAction } from '@reduxjs/toolkit';


export interface IProductsResponce {
    products: Product[]
  }
  
  export interface Product {
    id: number
    title: string
    body_html?: string
    vendor: string
    product_type: string
    created_at: string
    handle: string
    updated_at: string
    published_at?: string
    template_suffix: any
    status: string
    published_scope: string
    tags: string
    admin_graphql_api_id: string
    variants: Variant[]
    options: Option[]
    images: Image[]
    image?: Image2
  }
  
  export interface Variant {
    id: number
    title: string
    price: string
    sku: string
    position: number
    inventory_policy: string
    compare_at_price: any
    fulfillment_service: string
    inventory_management: string
    option1: string
    option2: any
    option3: any
    created_at: string
    updated_at: string
    taxable: boolean
    barcode: any
    grams: number
    image_id: any
    weight: number
    weight_unit: string
    inventory_item_id: number
    inventory_quantity: number
    old_inventory_quantity: number
    requires_shipping: boolean
    admin_graphql_api_id: string
  }
  
  export interface Option {
    id: number
    product_id: number
    name: string
    position: number
    values: string[]
  }
  
  export interface Image {
    id: number
    position: number
    created_at: string
    updated_at: string
    alt: string
    width: number
    height: number
    src: string
    variant_ids: any[]
    admin_graphql_api_id: string
  }
  
  export interface Image2 {
    id: number
    position: number
    created_at: string
    updated_at: string
    alt: string
    width: number
    height: number
    src: string
    variant_ids: any[]
    admin_graphql_api_id: string
  }

  interface IProductsState {
    loading:boolean,
    error:string,
    products:Product[]
  }
  

const initialState: IProductsState = {

    loading:false,
    error: '',
    products:[],

}

export const specificProductsSlice = createSlice({

    name: 'products',

    initialState,
    
    reducers : {


        fetching(state) {

            state.loading = true;
            
        },

        fetchSuccess(state, action: PayloadAction<IProductsResponce>){


            

            state.loading = false;
            state.products = action.payload.products;
           


        },

        fetchError(state, action: PayloadAction<Error>){

            state.loading = false;
            state.error = action.payload.message;
        },

    
    }

})

export default specificProductsSlice.reducer;