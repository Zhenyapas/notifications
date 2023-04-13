import { AlphaCard, AlphaStack, Box, Checkbox,Columns, Divider,  Text,  } from "@shopify/polaris";
import { useState } from "react";
import LocationComboBox from "./Locations/LocationComboBox";




const Locations = () => {



    const [value,setValue] = useState(false);
    const [value2,setValue2] = useState(false);

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
                Locations
                </Text>
                <Text as="p" variant="bodyMd">
                Choose which locations you want to receive low inventory notifications for.
                </Text>
              </AlphaStack>
           
            </Box>
            
            <AlphaCard roundedAbove="sm">
              <AlphaStack gap="4">

     
                <LocationComboBox type='primary' />

                <Checkbox

                    label="Check secondary locations for available inventory"
                    checked={value}
                    helpText='When a product is low in inventory at your primary locations, display a list of secondary locations where the same product is available (> 0).'
                    onChange={(e) => setValue(e)}

                />


                {(value) && <LocationComboBox  type='secondary' /> }

                {(value) && 
                    <Checkbox

                    label="Only show me products that have inventory available at secondary locations"
                    checked={value2}
                    helpText='If a product is low in inventory at your primary locations, but has no inventory available at your secondary locations, it will not be displayed in the notification.'
                    onChange={(e) => setValue2(e)}
                                    
                    />
                }

              </AlphaStack>
            </AlphaCard>

            
        </Columns>
     </>
    )
}


export default Locations;