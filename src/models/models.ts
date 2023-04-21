export interface IUser {
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
export interface ILatLong {
    lat: string,
    long: string,
}
export interface ServerResponse<T> {
    data: T[], 
    status: number,
    statusText: string, 
    headers: Object,
    config: Object,
    request:XMLHttpRequest,
}

export interface ICard {
    user: IUser
    key:string
}
  
export interface Id {
    id: string
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
export interface ILocationsResponce {

    locations:ILocation[]
}