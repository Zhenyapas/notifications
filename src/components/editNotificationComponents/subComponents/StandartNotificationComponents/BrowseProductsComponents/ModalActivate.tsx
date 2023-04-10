import {Button, Modal, LegacyStack, DropZone, Checkbox} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import ResourceListWithSelection from '../../../../ResourceListWithSelection';
import ModalComboBox from './ModalActivateComponents/ModalComboBox';

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
            <ModalComboBox type={type}/>
          <LegacyStack vertical>
            
            <ResourceListWithSelection />
          </LegacyStack>
        </Modal.Section>
      </Modal>
    </>
  );
}


export default OpenModal;