import { AlphaCard, AlphaStack, Box, Checkbox,  Columns, Divider,  Text,  } from "@shopify/polaris";
import { useState } from "react";






const AdditionalSettings = () => {



    const [value,setValue] = useState(false);
    const [value2,setValue2] = useState(false);

    return (


     <>

        <div style={{marginTop:'30px'}}></div>
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
                Additional settings
                </Text>
                <Text as="p" variant="bodyMd">
                Configure your notifications with additional settings.
                </Text>
              </AlphaStack>
           
            </Box>
            
            <AlphaCard roundedAbove="sm">
              <AlphaStack gap="4">


                <Checkbox

                    label="Include incoming transfers"
                    checked={value}
                    helpText='Inventory from incoming transfers will be taken into account.'
                    onChange={(e) => setValue(e)}

                />


                <Checkbox

                label="Include draft and archived products"
                checked={value2}
                onChange={(e) => setValue2(e)}

                />



              </AlphaStack>
            </AlphaCard>

            
        </Columns>


        <div style={{marginTop:'30px'}}></div>
        <Divider borderStyle='base' />
        


     </>
    )
}


export default AdditionalSettings;