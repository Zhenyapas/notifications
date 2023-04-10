import { AlphaCard, AlphaStack, ChoiceList, Divider, TextField } from "@shopify/polaris";
import useChoiceList from "../../../hooks/UseChoiceListHook";
import useSelect from "../../../hooks/UseSelectHook";
import BrowseProducts from "./StandartNotificationComponents/BrowseProducts";

const StandartNotifications = () => {



 const {value,onChange} = useSelect('1')
 const {value:selected,onChange:onChange1} = useChoiceList(['hidden']);
 const {value:selected2,onChange:onChange2} = useChoiceList(['hidden']);
  
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