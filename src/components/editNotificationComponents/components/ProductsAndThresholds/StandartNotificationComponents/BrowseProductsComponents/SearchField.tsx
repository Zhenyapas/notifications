import { Button, Icon, TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";
import {
    SearchMinor
  } from '@shopify/polaris-icons';
import OpenModal from "./ModalActivate";






const SearchField = ({type}:{type:string}) => {

  
    const [value,setValue] = useState('');
    const [isModal, setModal] = useState(false);

    const handleChanges = useCallback((e:string) => {

        setValue(e);
        setModal(!isModal);

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

            connectedRight={

                <Button onClick={() => handleChanges(value)} >
                    Browse
                </Button>
            }
            />

            {(isModal) && 
            
            <OpenModal 
            
            type={type}
            onClose={(e) => { 
                setModal(e);
                setValue('');
             }}
                
             />}


        </>
    )
}

export default SearchField;