import {  Icon, TextField } from "@shopify/polaris";
import {
    SearchMinor
  } from '@shopify/polaris-icons';
import { useCallback, useState } from "react";


const ModalComboBox = ({type}:{type:string}) => {


      
    const [value,setValue] = useState('');
   

    const handleChanges = useCallback((e:string) => {

        setValue(e);
       

    },[])

    return (

        <>
         <TextField
            label=''
            placeholder={`Search ${type}`}
            value={value}
            prefix={<Icon source={SearchMinor} />}
            autoComplete="off"
            onChange={handleChanges}

            />
        
        

        </>
    )

}

export default ModalComboBox;