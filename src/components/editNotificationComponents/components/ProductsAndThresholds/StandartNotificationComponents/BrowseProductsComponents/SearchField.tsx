import { Button, Icon, TextField } from "@shopify/polaris";
import { createContext, useCallback, useEffect, useState } from "react";
import {
    SearchMinor
  } from '@shopify/polaris-icons';
import OpenModal, { IData } from "./ModalActivate";
import ProductsList from "./ModalActivateComponents/ProductsList";
import { useAppSelector } from "../../../../../../hooks/redux";






const SearchField = ({type}:{type:string}) => {

  
    const [value,setValue] = useState('');
    const [isModal, setModal] = useState(false);

    const [data,setData] = useState<any>(false);

    const productsData = useAppSelector((state) => state.specificProducts.products);


    
   

    const handleChanges = useCallback((e:string) => {

        setValue(e);
        setModal(!isModal);

    },[])


    const pullData = (obj:IData):void => {

       console.log(obj)
       setData(obj);
       
    }


   


    return (

        <>
            <TextField
            label=''
            placeholder={`Search ${type}`}
            value={value}
            prefix={<Icon source={SearchMinor} />}
            autoComplete="off"
            onChange={handleChanges}

            connectedRight={

                <Button onClick={() => handleChanges(value)} >
                    Browse
                </Button>
            }
            />


            <ProductsList object={data} productsData={productsData}  /> 


            {(isModal) && 
            
           
            <OpenModal 
            
            type={type}
            onClose={(e) => { 
                setModal(e);
                setValue('');
             }}

             pushData = { pullData }
                
             />}


        </>
    )
}

export default SearchField;