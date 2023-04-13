import { Modal, LegacyStack,} from '@shopify/polaris';
import SearchListWithSelection from './ModalActivateComponents/SearchListWithSelection';


function OpenModal({onClose,type}:{onClose:(flag:boolean) => void,type:string}) {


  return (
    <>
      <Modal
        large
        open={true}
        onClose={() => onClose(false)}
        title={`Add ${type}`}
        primaryAction={{
          content: 'Add',
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
            
            <SearchListWithSelection type={type} />
          </LegacyStack>
        </Modal.Section>
      </Modal>
    </>
  );
}


export default OpenModal;