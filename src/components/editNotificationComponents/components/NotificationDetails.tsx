import { AlphaCard, AlphaStack, Box, ChoiceList, Columns, Select, Text, TextField } from "@shopify/polaris";
import { useParams } from "react-router-dom";
import useChoiceList from "../../../hooks/UseChoiceListHook";
import useSelect from "../../../hooks/UseSelectHook";
import SheduleNotification from "../subComponents/SheduleNotification";



const NotificationDetails = () => {


  const params = useParams();


  const {value:selected,onChange:onChange1} = useChoiceList(['hidden']);

  const {value:value1,onChange:onChange2} = useSelect('Active');

  const {value:value2,onChange:onChange3} = useSelect(params?.id || "");

    return (


        <Columns  columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">

            <Box
              as="section"
              paddingInlineStart={{ xs: '4', sm: '2'}}
              paddingInlineEnd={{ xs: '4', sm: '0' }}
              padding='4'
            >
            
              <AlphaStack gap="4">
                <Text as="h3" variant="headingMd">
                Notification details
                </Text>
                <Text as="p" variant="bodyMd">
                Give your notification a name and choose the type of notification you want to create.
                </Text>
              </AlphaStack>
           
            </Box>
            
            <AlphaCard roundedAbove="sm">
              <AlphaStack gap="4">

                <TextField label="Notification name" autoComplete='off' value={value2} onChange={(e) => onChange3(e) } />
                
                <Select
                  label="Weight unit"
                  options={['Active', 'Inactive']}
                  value={value1}
                  onChange={((e) => onChange2(e))}
                />

               
                  <ChoiceList
                      title="Send notification instantly "
                      
                      choices={[
                        {label: 'Send notification instantly', value: 'hidden',
                      helpText:'You will be notified in real-time each time a product hits your chosen low inventory threshold.'},
                        {label: 'Send notification on a schedule', value: 'optional',
                      helpText:'Your low inventory products will be batched into a single notification and sent on a schedule you choose.'},
                      ]}
                      selected={selected}
                      onChange={(e) => onChange1(e)}
                    />
              

              </AlphaStack>

  
              
            </AlphaCard>


            <div style={{marginTop:'30px'}}></div>
            
            { (selected[0] === 'optional') &&
            <SheduleNotification />
            }



            
            
            
        </Columns>
    )
}


export default NotificationDetails;