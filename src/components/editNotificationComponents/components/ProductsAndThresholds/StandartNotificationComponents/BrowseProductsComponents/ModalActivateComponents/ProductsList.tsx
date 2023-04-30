import {
    ResourceList,
    ResourceItem,
    Text,
    Button,
  } from '@shopify/polaris';

import { useEffect, useState } from 'react';
import { Product } from '../../../../../../../store/createNotificationSlices/specificProductsSlice';
import { IData } from '../ModalActivate';

  
  function ProductsList({object,productsData}:{object:IData, productsData:Product[]}) {

    

    const [obj, setObj] = useState<IData>({selected:[''],subSelected:{'1K':['23']}})

    

   
    

    useEffect(() => {
      setObj(object);
      console.log(object)

      console.log(obj)

      console.log(items)
    

    },[object]);


  

    let arr:string[] = []

   
    if (object && obj.selected) {
         const subSelected = [...Object.keys(object.subSelected)];
         arr = Array.from(new Set([...object.selected,...subSelected]));
    }
    
     


    const items = (object && obj.selected) ? arr.map((idItem:string) => {


        const index = productsData.findIndex(obj => obj.id.toString() === idItem)

        

        const {title} = productsData[index]

        const quantitySubItems = (obj.subSelected[idItem]) ? obj.subSelected[idItem]?.length : false
        

         return {

            id:idItem,
            title,
            url:'',
            subItems:(quantitySubItems) ? `${quantitySubItems} variants selected` : false

        }
      }) : [] 
    

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