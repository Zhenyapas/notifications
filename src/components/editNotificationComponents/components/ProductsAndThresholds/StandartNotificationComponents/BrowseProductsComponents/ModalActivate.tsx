import { Modal, LegacyStack,} from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../../hooks/redux';
import { setSelectedProducts } from '../../../../../../store/actions/notificationsActions';
import SearchListWithSelection from './ModalActivateComponents/SearchListWithSelection';

export interface IData {

  selected: string[];
  subSelected: {
    [key: string]: string[] 
    
  } 
}


function OpenModal({onClose,type,pushData}:{onClose:(flag:boolean) => void,type:string,pushData:(data:any) => void }) {




  



  const [isDisabled,setDisabled] = useState(true)
  const [data,setData] = useState<IData|false>(false)


  useEffect(() => pushData(data),[data]);


  const dispatch = useAppDispatch();


  const pullData = (obj:any) => {


    console.log("MODAL")

    console.log(obj);

    ((obj.selected.length !== 0 ) || (!obj.subSelected) || (Object.entries(obj.subSelected)?.length !== 0))  
    ? setDisabled(false) : setDisabled(true);

    

    setData({...obj,selected:Array.from(new Set(obj.selected))});

    

    pushData(obj);

    //dispatch(setSelectedProducts(obj));


  }

 


  return (
    <>
      <Modal
        large
        open={true}
        onClose={() => onClose(false)}
        title={`Add ${type}`}
        primaryAction={{
          content: 'Add',
          onAction: () => {
            console.log(data);
           // (data) && dispatch(setSelectedProducts(data));
            onClose(false);
          },
          disabled:isDisabled,
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
            
            <SearchListWithSelection type={type} pullData={pullData} />

          </LegacyStack>
        </Modal.Section>
      </Modal>
    </>
  );
}


export default OpenModal;