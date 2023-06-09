import { AlphaCard, AlphaStack, Box, ChoiceList, Columns, Divider, Text, } from "@shopify/polaris";
import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import useChoiceList from "../../../hooks/UseChoiceListHook";

import StandartNotifications from "./ProductsAndThresholds/StandartNotificationComponents/StandartNotification";




const ProductsAndNotifications= () => {


  const productsNotification = useAppSelector(state => state.createNotificationData.data?.selected_products);


  useEffect(() => console.log(productsNotification),[productsNotification]);





  const {value:selected,onChange:onChange1} = useChoiceList(['hidden']);


    return (

      <>

        <Divider borderStyle='base' />
        <div style={{marginTop:'30px'}}></div>

        


        <Columns  columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
            

            <Box
              as="section"
              paddingInlineStart={{ xs: '4', sm: '2'}}
              paddingInlineEnd={{ xs: '4', sm: '0' }}
              padding='4'
            >
            
              <AlphaStack gap="4">
                <Text as="h3" variant="headingMd">
               Products and thresholds
                </Text>
                <Text as="p" variant="bodyMd">
                Choose the collections or products you want to be notified for.
                </Text>
              </AlphaStack>
           
            </Box>
            
            <AlphaCard roundedAbove="sm">
              <AlphaStack gap="4">


               
                  <ChoiceList
                      title="Standard notification "
                      
                      choices={[
                        {label: 'Standard notification', value: 'hidden',
                      helpText:'Choose a single threshold for your selected products.'},
                      ]}
                      selected={selected}
                      onChange={(e) => onChange1(e)}
                    />
              

              </AlphaStack>

  
              
            </AlphaCard>


            <div style={{marginTop:'30px'}}></div>
            
            { (selected[0] === 'hidden') &&
            <StandartNotifications />
            }
            
            
            
        </Columns>
     </>
    )
}


export default ProductsAndNotifications;