import {
    LegacyCard,
    ResourceList,
    Badge,
    ResourceItem,
    Text,
  } from '@shopify/polaris';
import {useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteNotification } from '../store/actions/notificationsActions';


  
  function ResourceListWithSelection() {

    const [selectedItems, setSelectedItems] = useState<any>([]);

    
      const [notificationItems,setItems] = useState<any>([]);


      


    const notificationsData = useAppSelector((state) => state.notificationsData.data);

    const loading = useAppSelector((state) =>  state.notificationsData.loading);



    const dispatch = useAppDispatch();

      useEffect(() => {
       setItems(notificationsData);
       console.log(loading);
      },[notificationsData])

  
  
    const resourceName = {
      singular: 'customer',
      plural: 'customers',
    };


    const parseToItems = (notificationsData.length !==0) ? notificationItems.map((e:any) => {

        const {id,name} = e;

        return {id:e.id,name,url:`id${id}`,date:''}

    } ) : []
  
    const items =  (notificationsData.length !==0) ? parseToItems : [];




      const arr =   [
        {
          content: 'Delete notifications',
          onAction: () => {

            console.log(selectedItems);
            dispatch(deleteNotification(selectedItems))
            setSelectedItems([])
          },
        },
      ];

      

  
    const promotedBulkActions = [
      {
        content: `Delete ${(selectedItems.length > 1) ? 'notifications' : 'notification'}`  ,
        onAction: () =>  {
          dispatch(deleteNotification(selectedItems))
          setSelectedItems([]);
        },
      },
    ];
  

  
    return (
      <LegacyCard>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          bulkActions={arr}
          resolveItemId={resolveItemIds}
          loading={loading}
        />
      </LegacyCard>
    );
  
    function renderItem(item: typeof items[number], _: string, index: number) {
      const {id, url, name, date} = item;
   
  
      return (
        <>
        <ResourceItem
          id={id}
          url={url}
          sortOrder={index}
          accessibilityLabel={`View details for ${name}`}
        >
        <div style={{display:'flex'}}>
         <div> 
       <Text variant="bodyMd" fontWeight="bold" as="h3">
            {name}
          </Text>
          <div>{date}</div>
         </div> 
{/*           <div style={{flexGrow:'1', display:'flex', justifyContent:'flex-end',alignItems:'center',paddingRight:'20px'}}>
            <Badge  status="success">Active</Badge>
          </div> */}
        </div>  
        </ResourceItem>
      
          
        </>  
      );
    }
  
    function resolveItemIds({id}: {id: string}) {
      return id;
    }

  }
  
  
  export default ResourceListWithSelection;