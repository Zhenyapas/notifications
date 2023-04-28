import {
    LegacyCard,
    ResourceList,
    ResourceItem,
    Text,
    Avatar,
    Checkbox,
    Divider,
    Thumbnail,
    Button,
  } from '@shopify/polaris';
  import type {ResourceListProps} from '@shopify/polaris';
  import {useCallback, useEffect, useRef, useState} from 'react';
import ModalComboBox from './ModalComboBox';
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
import { fetchProducts } from '../../../../../../../store/actions/notificationsActions';
import {ImageMajor} from '@shopify/polaris-icons';
import { Product } from '../../../../../../../store/slices/specificProductsSlice';
import { IData, } from '../ModalActivate';

  
  function SearchListWithSelection({type,pullData}:{type:string,pullData:(obj:IData) => void}) {

  
  
    const resourceName = {
      singular: 'customer',
      plural: type,
    };
  
    const initialItems = [
        {
          id: 1,
          title: '',
          variants:[
            {
              inventory_quantity:'',
              price:''
            }
          ],
          image:{
            src:''
          }
        },
        
    ];

    interface Subtitle {
      [key: string]: any[];
    }
    const subTitle = useRef<Subtitle>({});




    const [selectedItems, setSelectedItems] = useState<
      any
      >([]);

    const [productVariants, setVariants] = useState(subTitle.current);

    

   
    const [items, setItems] = useState<object[]>(initialItems);
    
    const productsData = useAppSelector((state) => state.specificProducts);
    const dispatch = useAppDispatch();

    

    useEffect(() => {
      dispatch(fetchProducts());
      setItems(productsData.products);
    },[]);

    useEffect(() => {
      setItems(productsData.products);
    },[productsData]);



    const pushData = (selectedItems:any,subTitle:any) => {pullData({selected:selectedItems,subSelected:subTitle.current})}

  


    useEffect(() => {
      console.log(selectedItems);
      console.log(subTitle);
      pushData(selectedItems,subTitle);
      
    },[productVariants]);

    useEffect(() => {
      console.log(selectedItems);
      console.log(subTitle);
      pushData(selectedItems,subTitle);
      
    },[selectedItems]);



    const search = <ModalComboBox type={type} />



    
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
          loading={(productsData.loading) ? true : false}
          
         
          
        />
      </LegacyCard>


      </>
    );
  
    function renderItem(item: Product, _: string, index: number) {
      const {id, title,variants,image} = item;

       const parseId = id + ''  ;

      const media =(image?.src) ? <Avatar customer={false} source={image?.src} name={`Product ${index}`} shape="square" size='medium'/>
      : <Thumbnail source={ImageMajor} size="small" alt="img" />;



      
      
      


      const isAllSelected = (selectedItems?.includes(parseId)) ? true : false;






      const pullOut = (id:string,arr:any[]) => {


        const newSubTitle = { ...subTitle.current }

        if(arr.length) {
          newSubTitle[id] = arr}
           else {
            delete newSubTitle[id]
            
          }


        /* if(subTitle?.current[id]?.length == 0) setSelectedItems([]); */

        subTitle.current = newSubTitle;


        setVariants(subTitle.current)

       /*  pushData(selectedItems,subTitle); */

       


      }



      
      
      return (

        <>
     
      { (variants.length === 1) &&
        <ResourceItem
          id={parseId}
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
      }

       

        {(variants.length > 1) 
        &&  
        <>
        <Divider /> 
          <div >
            <ResourceItemExample 
            isAllSelected={isAllSelected} 
            items={variants}  
            indexId={parseId} 
            pullOut={pullOut}
            mainItem={item}
             />
          </div>
          <Divider />
          </>}

   
          
      
          
      </>
      );
    }

  }



  

    

    function CheckboxExample({id,func,}:{id:string,func:(str:string,flag:boolean) => void }) {


      

      const [checked, setChecked] = useState(false);

      
      const handleChange = useCallback(
        (newChecked: boolean) => {


          setChecked(newChecked);
          func(id,newChecked);
          
        },
        [checked],
      );


      return (
        <Checkbox
          label=""
          checked={checked}
          onChange={handleChange}
        />
      );
    }


    interface IObj {
      isAllSelected:boolean,
      items:any,indexId:string,
      pullOut:(i:string,arr:string[]) => void
      mainItem:Product;

      }
    

    function ResourceItemExample({isAllSelected, items, indexId, pullOut,mainItem}:IObj) {

      let [isMainChecked, setMainChecked] = useState<boolean|'indeterminate'>('indeterminate')

      const {image,title} = mainItem;

      const media =(image?.src) ? <Avatar customer={false} source={image?.src} shape="square" size='medium'/>
      : <Thumbnail source={ImageMajor} size="small" alt="img" />;

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
           pullOut(indexId,arrRef.current);

           (arrRef.current.length < 1) ? setMainChecked('indeterminate') : setMainChecked(true);

           
         
      }
      
     
      

      
 
    
      return (

        <>

          <div style={{display:'flex',alignItems:'center',paddingTop:'10px', paddingLeft:'20px'}}>
            <Checkbox 
            label='' 
            onChange={() => {
              (arrRef.current.length < 1)? setMainChecked('indeterminate') :
              setMainChecked(true);
               
              }}
            checked={isMainChecked}
            />
            <div style={{marginLeft:'8px',marginRight:'20px'}}>{media}</div>

            <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {title}
            </Text>
            
          </div>
      
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

        </>

      );
    }


  export default SearchListWithSelection;