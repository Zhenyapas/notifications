import {
    ResourceList,
    ResourceItem,
    Text,
    Button,
    InlineError,
  } from '@shopify/polaris';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
import { setSelectedProducts } from '../../../../../../../store/actions/notificationsActions';

import { Product } from '../../../../../../../store/createNotificationSlices/specificProductsSlice';
import { IData } from '../ModalActivate';

  
  function ProductsList({object,productsData}:{object:IData, productsData:Product[]}) {

    const dispatch = useAppDispatch();
    const validationState = useAppSelector((state) => state.createNotificationData.validation);

    const {selected_products:error} = validationState

    let arr:string[] = []

   
    if (object && object.selected) {
         const subSelected = [...Object.keys(object.subSelected)];
         arr = Array.from(new Set([...object.selected,...subSelected]));
    }
    
     useEffect(() => {(object) && dispatch(setSelectedProducts(object))} ,[object]);


    const items = (object && object.selected) ? arr.map((idItem:string) => {


        const index = productsData.findIndex(obj => obj.id.toString() === idItem)

        

        const {title} = productsData[index]

        const quantitySubItems = (object.subSelected[idItem]) ? object.subSelected[idItem]?.length : false
        

         return {

            id:idItem,
            title,
            url:'',
            subItems:(quantitySubItems) ? `${quantitySubItems} variants selected` : false

        }
      }) : [] 
      
      if(error) return <> <InlineError message="At least 1 product or variant is required" fieldID="productsList" /> </>

    return (
     <>
        <ResourceList
          resourceName={{singular: 'customer', plural: 'customers'}}
          items={items}
          renderItem={(item) => {
            const {id, title,subItems} = item;

  
            return (
            <>
              <ResourceItem
                id={id}
                url={''}
                accessibilityLabel={`View details for ${title}`}
                
              >
                <div style={{display:'flex',}}>

                  <div>
                    <Text variant="bodyMd" fontWeight="bold" as="h3">
                      {title}
                    </Text>
                     <div>{subItems}</div>
                  </div>



                 
                    <div style = {{flexGrow:'1', display:'flex', justifyContent:'flex-end',alignItems:'center',paddingRight:'20px'}}>
                  
                      <Button plain >Remove</Button>
                     
                   

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






  export default ProductsList;