import { Modal, LegacyStack,} from '@shopify/polaris';
import { useCallback, useEffect, useState } from 'react';
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


  const pullData = (obj:any) => {


    console.log("MODAL")

    console.log(obj);

    ((obj.selected.length !== 0 ) || (!obj.subSelected) || (Object.entries(obj.subSelected)?.length !== 0))  
    ? setDisabled(false) : setDisabled(true);

    

    setData(obj);

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

   {/*         {(data) &&  <ProductsList obj={data} productsData={productsData}  /> } */}

          </LegacyStack>
        </Modal.Section>
      </Modal>
    </>
  );
}


export default OpenModal;