import { AlphaCard, AlphaStack, Box, Button,  Columns, Divider, Text,  } from "@shopify/polaris";
import { useEffect, useRef, useState } from "react";
import { NotificationRecipient } from "../../../models/notificationsResponce";
import OpenModalRecipients from "./NotificationRecipients/OpenRecipientsModal";
import Recipient from "./NotificationRecipients/Recipient";






const NotificationRecipients = () => {



  const [isModal,setModal] = useState(false);



  const [arrRecipients,setArrRecipient] = useState<NotificationRecipient[]>([])


  useEffect(() => console.log(arrRecipients),[arrRecipients])


 

  const pullData = (obj:NotificationRecipient):void => {

     setArrRecipient((prev) => [...prev,obj]);

  }


  const removeRecipient = (index:number) => {

     const newArr = [...arrRecipients.slice(0, index),...arrRecipients.slice(index + 1)];

     setArrRecipient(newArr);

     console.log(index);

     console.log(newArr);
  }





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
                Notification recipients
                </Text>
                <Text as="p" variant="bodyMd">
                Choose who you want to be notified when your inventory hits your low inventory threshold.
                </Text>

               
              </AlphaStack>

            <div style={{marginBottom:'20px'}}></div>


            <Button size='medium' onClick={() => setModal(!isModal)}>Add recipient</Button>
            
            </Box>
            
            <AlphaCard roundedAbove="sm" >
              <AlphaStack gap="4">

                <Recipient arrRecipients={arrRecipients} removeRecipient={removeRecipient} />

              </AlphaStack>

            </AlphaCard>


            {(isModal) &&  <OpenModalRecipients 
             title='Add a notification recipient'
             onClose={() => setModal(!isModal)} 
             pullData={pullData}
             arrRecipients={arrRecipients}
              />}


            <div style={{marginTop:'30px'}}></div>
            
 



            
            
            
        </Columns>

        </>
    )
}


export default NotificationRecipients;