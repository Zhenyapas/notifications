import { AlphaCard, AlphaStack, TextField } from "@shopify/polaris";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../../hooks/redux";
import useSelect from "../../../../../hooks/UseSelectHook";
import { setThreshold } from "../../../../../store/actions/notificationsActions";
import BrowseProducts from "./BrowseProducts";


const StandartNotifications = () => {



 const {value,onChange} = useSelect('1')

 const dispatch = useAppDispatch()


 useEffect(() => dispatch(setThreshold(+value)) );

    return (

        <>
            <AlphaCard>
              <AlphaStack gap="4">

                <TextField
                 label='Low inventory threshold'
                  type='number'
                  value={value}
                  onChange={(e) => onChange(e)}
                  autoComplete="off"
                  helpText='You will be notified when inventory is at or below this level.'

                />

                <BrowseProducts title='Include in this notification' />
                <BrowseProducts title='Exclude from this notification' />

              </AlphaStack>
            </AlphaCard>

            <div style={{marginBottom:'20px'}}></div>
        </>
    );
 }

 export default StandartNotifications;