import { Modal, LegacyStack,  Select, TextField, FormLayout} from '@shopify/polaris';
import useSelect from '../../../../hooks/UseSelectHook';




function OpenModalRecipients({onClose,title}:{onClose:(flag:boolean) => void,title:string}) {

    const {value,onChange} = useSelect('New Recipiant');
    const {value:value2,onChange:onChange2} = useSelect('');
    const {value:value3,onChange:onChange3} = useSelect('');
    const {value:value4,onChange:onChange4} = useSelect('')
  return (
    <>
      <Modal
        
        open={true}
        onClose={() => onClose(false)}
        title={title}
        primaryAction={{
          content: 'Add notification recipient',
          onAction: () => console.log('Add'),
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
                    options={['New Recipient', 'Kostya O']}
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