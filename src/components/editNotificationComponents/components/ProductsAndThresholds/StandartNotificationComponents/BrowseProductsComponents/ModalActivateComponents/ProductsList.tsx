import {
    ResourceList,
    ResourceItem,
    Text,
    Button,
    ButtonGroup,
    Icon,
  } from '@shopify/polaris';
  import {DeleteMinor} from '@shopify/polaris-icons';
import { useEffect, useState } from 'react';
import { Product } from '../../../../../../../store/slices/specificProductsSlice';
import { IData } from '../ModalActivate';

  
  function ProductsList({object,productsData}:{object:IData, productsData:Product[]}) {

    

    const [obj, setObj] = useState<any>(false);
    

    useEffect(() => {
      setObj(object);
      console.log(object)
      console.log(productsData);
    },[object]);

    

     if(obj) { 

       obj.selected.push(...Object.keys(obj.subSelected));
      
      }

    


     const items = (obj) ? [...new Set(object.selected)].map((idItem) => {


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