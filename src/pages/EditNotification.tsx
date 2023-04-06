import {Page,Columns,Box,AlphaStack,Text,AlphaCard,TextField,Select,ChoiceList} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import {  useParams } from 'react-router-dom';
import SheduleNotification from '../components/editNotificationComponents/SheduleNotification';






function EditNotification() {

  const params = useParams();


  const [selected, setSelected] = useState<string[]>(['hidden']);

  const handleChange = useCallback((value: string[]) => setSelected(value), []);


  return (

      <Page
        breadcrumbs={[{content: 'Notifications', url: 'main'}]}
        title="Edit Notification"
        secondaryActions={[
          {
            content: 'Send now',
            disabled: true,
            helpText: 'You need permission to import products.',
          },
        ]}
      >


      <div style={{marginTop:'20px'}}>
          
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

                <TextField label="Notification name" autoComplete='off' value={params.id} />
                
                <Select
                  label="Weight unit"
                  options={['Active', 'Inactive']}
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
                      onChange={handleChange}
                    />

              </AlphaStack>

  
              
            </AlphaCard>


            <div style={{marginTop:'30px'}}></div>

            <SheduleNotification />

            
          </Columns>

      </div>
        

      </Page>
    );
}








export default EditNotification;