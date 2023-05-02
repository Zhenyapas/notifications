import {
    ResourceList,
    ResourceItem,
    Text,
    Button,
    ButtonGroup,
    Icon,
    InlineError,
  } from '@shopify/polaris';
  import {DeleteMinor} from '@shopify/polaris-icons';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { NotificationRecipient } from '../../../../models/notificationsResponce';
import { setNotificationRecipients } from '../../../../store/actions/notificationsActions';
 

  
  function Recipient({arrRecipients,removeRecipient:pushIndexRemove}:{arrRecipients: NotificationRecipient[],removeRecipient:(index:number) => void}) {

    const dispatch = useAppDispatch();

    const validationState = useAppSelector((state) => state.createNotificationData.validation);

    const {notification_recipients:error} = validationState

    const [recipients,setRecipients] = useState<NotificationRecipient[]>(arrRecipients)

    useEffect(() => {
      dispatch(setNotificationRecipients(recipients));
      setRecipients(arrRecipients);
    } , [recipients] );


    const arr = arrRecipients.map(e => {
     return {id:e.recipient,url:'',mail:e.recipient,name:`${e.first_name} ${e.last_name}`}
    })


    const remove = (index:number) => {

      const newRecipients = recipients.filter((_,i) => i === index );

      pushIndexRemove(index);

      setRecipients(newRecipients);
    }



    if(arrRecipients.length === 0) return <>
    <div style={{margin:'auto'}}>You haven't added any notification recipients yet</div>
    {(error) && 
      <div style={{margin:'auto '}}>
        <InlineError message="At least 1 notification recipient is required" fieldID="recipients" />
      </div>}
    </>

    
    return (
     <>
        <ResourceList
          resourceName={{singular: 'customer', plural: 'customers'}}
          items={arr}
          renderItem={(item,_,index) => {
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
                      <Button onClick={() => remove(index)}>Remove</Button>
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