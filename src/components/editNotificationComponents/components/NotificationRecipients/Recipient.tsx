import {
    ResourceList,
    ResourceItem,
    Text,
    Button,
    ButtonGroup,
    Icon,
  } from '@shopify/polaris';
  import {DeleteMinor} from '@shopify/polaris-icons';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import { NotificationRecipient } from '../../../../models/notificationsResponce';
import { setNotificationRecipients } from '../../../../store/actions/notificationsActions';
 

  
  function Recipient({arrRecipients}:{arrRecipients: NotificationRecipient[]}) {

    const dispatch = useAppDispatch();

    useEffect(() => dispatch(setNotificationRecipients(arrRecipients)) , [arrRecipients] );

    const arr = arrRecipients.map(e => {
     return {id:e.recipient,url:'',mail:e.recipient,name:`${e.first_name} ${e.last_name}`}
    })

 
    return (
     <>
        <ResourceList
          resourceName={{singular: 'customer', plural: 'customers'}}
          items={arr}
          renderItem={(item) => {
            const {id, name, mail} = item;

  
            return (
            <>
              <ResourceItem
                id={id}
                url={''}
                accessibilityLabel={`View details for ${name}`}
                
              >
                <div style={{display:'flex',}}>

                  <div>
                    <Text variant="bodyMd" fontWeight="bold" as="h3">
                      {name}
                    </Text>
                    <div>{mail}</div>
                  </div>



                 
                    <div style = {{flexGrow:'1', display:'flex', justifyContent:'flex-end',alignItems:'center',paddingRight:'20px'}}>
                    <ButtonGroup segmented>
                      <Button>Remove</Button>
                      <Button icon={() => <Icon source={DeleteMinor} /> }/>
                    </ButtonGroup>

                  </div>
                
                
                </div>
              </ResourceItem>
           
            </>
            );
          }}
        />
        </>
    );
  }

  export default Recipient;