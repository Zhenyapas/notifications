import { Modal, LegacyStack,  Select, TextField, FormLayout, SelectOption} from '@shopify/polaris';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import useSelect from '../../../../hooks/UseSelectHook';
import { NotificationRecipient } from '../../../../models/notificationsResponce';


 interface ISelectOptions {
   label:string,
   value:string
 }



 const arr1:NotificationRecipient[] = [];


function OpenModalRecipients({onClose,title,pullData:pushData,arrRecipients}:{onClose:(flag:boolean) => void,title:string,pullData:(obj:NotificationRecipient) => void,arrRecipients:NotificationRecipient[]}) {

    const {value,onChange} = useSelect('default');
    const {value:value2,onChange:onChange2} = useSelect('');
    const {value:value3,onChange:onChange3} = useSelect('');
    const {value:value4,onChange:onChange4} = useSelect('')

    const recipients = useAppSelector((state) => state.notification_recipients.notification_recipients)


    const [options,setOptions] = useState<ISelectOptions[]>([]);

   
  



    const pullData = (obj:NotificationRecipient):void =>  {


       if(arrRecipients.find((e) => e.recipient === obj.recipient)) {

          return
       }   
       
       /* arr.push(obj); */

       pushData(obj);
       onClose(false);

    }


    useEffect(() => {
      if (recipients) {
        const newOptions = recipients
          .filter(
            (recipient, index, self) =>
              self.findIndex((r) => r.recipient === recipient.recipient) === index
          )
          .map((recipient) => ({
            label: `${recipient.first_name} ${recipient.last_name}`,
            value: recipient.recipient,
          }));
    
        setOptions([{label:'New Recipient',value:'default'},...newOptions]);
      }
    }, [recipients]);

    useEffect(() => {
      console.log(value)

      const notDefault = (value === 'default') ? false : true;

      if(recipients && notDefault) {

        const index = recipients.findIndex(obj => obj.recipient === value)
        onChange2(recipients[index].first_name)
        onChange3(recipients[index].last_name)
        onChange4(recipients[index].recipient)

      } else {
        onChange2('')
        onChange3('')
        onChange4('')
      }


    }, [value])




  return (
    <>
      <Modal
        
        open={true}
        onClose={() => onClose(false)}
        title={title}
        primaryAction={{
          content: 'Add notification recipient',
          onAction: () => {

            pullData({last_name:value3,first_name:value2,recipient:value4})
            onClose(false);
          },
          disabled:(value && value2 && value3 && value4) ? false : true
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: () => onClose(false),
          },
        ]}
      >
        <Modal.Section>
          <LegacyStack vertical>
            <FormLayout>   
                             
                <Select
                    label="Weight unit"
                    disabled={(recipients) ? false : true}
                    options={options}
                    value={value}
                    onChange={((e) => onChange(e))}
                />

           
          
                <FormLayout.Group condensed>
                    <TextField label="First name" autoComplete='off' value={value2} onChange={(e) => onChange2(e) } />     
                    <TextField label="Last name" autoComplete='off' value={value3} onChange={(e) => onChange3(e) } /> 
                </FormLayout.Group>
      
    
                <TextField  type="email" label="Email adress" autoComplete='off' value={value4} onChange={(e) => onChange4(e) } />

            </FormLayout>
          </LegacyStack>
        </Modal.Section>
      </Modal>
    </>
  );
}


export default OpenModalRecipients;