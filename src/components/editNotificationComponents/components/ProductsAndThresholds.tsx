import { AlphaCard, AlphaStack, Box, ChoiceList, Columns, Divider, Text, } from "@shopify/polaris";
import useChoiceList from "../../../hooks/UseChoiceListHook";
import StandartNotifications from "../subComponents/StandartNotification";



const ProductsAndNotifications= () => {





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
                        {label: 'CSV notification', value: 'optional',
                      helpText:'Choose different thresholds for different products. Recommended for stores with large numbers of products.'},
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