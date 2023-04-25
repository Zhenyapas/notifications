import {
    LegacyCard,
    ResourceList,
    ResourceItem,
    Text,
    Avatar,
    Checkbox,
    Divider,
  } from '@shopify/polaris';
  import type {ResourceListProps} from '@shopify/polaris';
  import {useCallback, useEffect, useRef, useState} from 'react';
import ModalComboBox from './ModalComboBox';
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
import { fetchProducts } from '../../../../../../../store/actions/notificationsActions';
import parseIdsToStrings from '../../../../../../../parse/parseToStringIds'

  
  function SearchListWithSelection({type}:{type:string}) {

    const [selectedItems, setSelectedItems] = useState<
      ResourceListProps['selectedItems']
    >([]);


    interface Subtitle {
      [key: string]: any[];
    }
    const subTitle = useRef<Subtitle>({});



    useEffect(() => console.log(selectedItems),[selectedItems]);

    
    const productsData = useAppSelector((state) => state.specificProducts);
    const dispatch = useAppDispatch();



    useEffect(() => {

      dispatch(fetchProducts());
      console.log(productsData);
      

    },[]);
    
  
    const resourceName = {
      singular: 'customer',
      plural: type,
    };
  
 
    const itemsSub=[
      {
        id: 'Ice',
        url: '#',
        title: 'Ice',
        price: '1200$',
        inventory_quantity:19,
      },
      {
        id: 'Blue',
        url: '#',
        title: 'Blue',
        price: '1400$',
        inventory_quantity:19,
      },];

    const items = [
        {
          id: '1',
          url: 'id1',
          name: 'Notification 1',
          title: 'The Archived Snowboard',
          date: 'January, 14',
          variants:[
            {
              price:'1629',
              inventory_quantity:19,
              title	:	'Default Title'
            }
          ]
        },
        {
          id: '2',
          url: 'id2',
          name: 'The Collection Snowboard: Liquid',
          title: 'The Collection Snowboard: Liquid',
          date: 'February, 22',
          variants:[
            {
              price:'262',
              inventory_quantity:19,
              title	:	'Default Title'
            }
          ]
        },
        {
          id: '3',
          url: 'id3',
          name: 'The Collection Snowboard: Oxygen',
          title: 'The Collection Snowboard: Oxygen',
          date: 'March, 12',
          variants:[
            {
              price:'629.25',
              inventory_quantity:19,
              title	:	'Default Title'
            }
          ]
        },
        {
          id: '4',
          url: 'id4',
          name: 'Notification 4',
          title: 'The Collection Snowboard: Oxygen',
          date: 'March, 24',
          variants:itemsSub,
        },
        {
          id: '5',
          url: 'id5',
          name: 'Notification 5',
          title:'The Draft Snowboard',
          date: 'April, 1',
          variants:[
            {
              price:'2629.95',
              inventory_quantity:19,
              title	:	'Default Title'
            }
          ]
        },
   
      ];

  


  


    const search = <ModalComboBox type={type} />

    const newItems:any= {...parseIdsToStrings(items)}

    console.log(newItems);
    
    return (
      <>
      <div style={{marginBottom:'20px'}}>{search}</div>
       


      <LegacyCard>
      
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          selectable
          showHeader={false}
          
         
          
        />
      </LegacyCard>
      </>
    );
  
    function renderItem(item: typeof items[number], _: string, index: number) {
      const {id, title,variants} = item;

      const media = <Avatar name={`Product ${index}`} shape="square" size='medium'/>;




      
      
      


      const isAllSelected = (selectedItems?.includes(id)) ? true : false;






      const pullOut = (id:string,arr:any[]) => {


        console.log(`Id:${id} Array:${arr}`);

        const newSubTitle = { ...subTitle.current }

        newSubTitle[id] = arr;

        subTitle.current = newSubTitle;

        console.log(subTitle.current);
        

      }



      
      
      return (

        <>
     
  
        <ResourceItem
          id={id}
          media={media}
          url=''
          sortOrder={index}
          accessibilityLabel={`View details for ${title}`}
          
        >
      
        <div style={{display:'flex', alignItems:'center', marginTop:'10px'}}> 

          <div style={{display:'flex',alignItems:'center'}}>
            <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {title}
            </Text>

          </div>

          <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',flexGrow:'1',}}>

            <div>
            {(variants.length > 1) ? '' : variants[0].inventory_quantity + '  available'}
            </div>

            <div style={{marginLeft:'20px'}}>
                  {(variants.length > 1) ? '' : variants[0].price + '$'}
            </div>

          </div>

        </div>



        </ResourceItem>

       

        {(variants.length > 1) 
        &&  
        <>
        <Divider /> 
          <div >
            <ResourceItemExample 
            isAllSelected={isAllSelected} 
            items={variants}  
            indexId={id} 
            pullOut={pullOut} />
          </div>
          <Divider />
          </>}

   
        
      
          
      </>
      );
    }

  }



  

    

    function CheckboxExample({id,isChecked,func}:{id:string,isChecked:boolean,func:(str:string,flag:boolean) => void }) {


      

      const [checked, setChecked] = useState(isChecked);

      
      const handleChange = useCallback(
        (newChecked: boolean) => {


          setChecked(newChecked);
          func(id,newChecked);
          
        },
        [checked],
      );

      useEffect(() => {
        
        if(isChecked){ 

          setChecked(isChecked);
          func(id,isChecked);
        } else {
          
          setChecked(isChecked)
        }
      
      },[isChecked]);


    
      return (
        <Checkbox
          label=""
          checked={checked}
          onChange={handleChange}
        />
      );
    }


    

    function ResourceItemExample({isAllSelected, items, indexId, pullOut}:{isAllSelected:boolean,items:any,indexId:string,pullOut:(i:string,arr:string[]) => void}) {



      function toggleStringInArray(arr: string[], str: string): string[] {
        const index = arr.indexOf(str);
        if (index === -1) {
          // Если строки нет в массиве, добавляем ее
          return [...arr, str];
        } else {
          // Если строка есть в массиве, удаляем ее
          return [...arr.slice(0, index), ...arr.slice(index + 1)];
        }
      }

      const arrRef = useRef((isAllSelected) ? items.map((e:any) => e.id) : []);



      const propsOut = (str:string, flag:boolean):void => {
     
           arrRef.current = toggleStringInArray(arrRef.current,str);
           console.log(arrRef.current);
           pullOut(indexId,arrRef.current);
      }
      
     
      

      
 
    
      return (
      
          <ResourceList
            resourceName={{singular: 'customer', plural: 'customers'}}

            selectable={false}
            
            items={items}
            renderItem={(item) => {
              const {id, url,  title, price,inventory_quantity} = item;
    
              return (
                <ResourceItem
                  id={id}
                  url={url}
                  accessibilityLabel={`View details for ${price}`}
                  name={price}
                >
                  <div style={{display:'flex',alignItems:'center',paddingLeft:'35px'}}>

                    <div style={{marginRight:'8px'}}>

                      <CheckboxExample 
                      id={id}
                      isChecked={isAllSelected} 
                      func={propsOut}
                       />

                    </div>
                    <Text variant="bodyMd" fontWeight="bold" as="h3">
                        {title}
                    </Text>

                    <div style={{display:'flex',flexGrow:'1',justifyContent:'flex-end',alignItems:'center'}}>

                      <div style={{marginRight:'10px'}}>{`${inventory_quantity} available`}</div>
                      <div>{price}</div>

                    </div>

                  </div>
                </ResourceItem>
              );
            }}
          />

      );
    }


  export default SearchListWithSelection;