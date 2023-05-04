import {
    ResourceList,
    ResourceItem,
    Text,
    Button,
    InlineError,
  } from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
import { setSelectedProducts } from '../../../../../../../store/actions/notificationsActions';

import { Product } from '../../../../../../../store/createNotificationSlices/specificProductsSlice';
import { IData } from '../ModalActivate';

  
  function ProductsList({object,productsData}:{object:IData, productsData:Product[]}) {

    const dispatch = useAppDispatch();
    const validationState = useAppSelector((state) => state.createNotificationData.validation);

    const {selected_products:error} = validationState

    let arr:string[] = []

    const [obj,setObj] = useState(object);

   
    if (obj && obj.selected) {
         const subSelected = [...Object.keys(obj.subSelected)];
         arr = Array.from(new Set([...obj.selected,...subSelected]));
    }
    
     useEffect(() => {
       setObj(object);
      } ,[object]);

      useEffect(() => {
        (obj) && dispatch(setSelectedProducts(obj));
      },[obj]);


    


    const items = (obj && obj.selected) ? arr.map((idItem:string) => {


        const index = productsData.findIndex(obj => obj.id.toString() === idItem)

        

        const {title} = productsData[index]

        const quantitySubItems = (obj.subSelected[idItem]) ? obj.subSelected[idItem]?.length : false
        

         return {

            id:idItem,
            title,
            url:'',
            subItems:(quantitySubItems) ? `${quantitySubItems} variants selected` : false

        }
      }) : [] ;

      const removeItem = (id:string) => {

        const index = obj.selected.findIndex(idSelected =>  idSelected === id);

        const newSelected = [...obj.selected.slice(0,index), ...obj.selected.slice(index+1,-1)];

        const newSubselected = {...obj.subSelected};
        delete newSubselected[id];

        setObj({selected:newSelected,subSelected:newSubselected});
      }
      
      if(error && obj && obj.selected.length === 0) return <> <InlineError message="At least 1 product or variant is required" fieldID="productsList" /> </>

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
                  
                      <Button plain onClick={() => removeItem(id)} >Remove</Button>
                     
                   

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