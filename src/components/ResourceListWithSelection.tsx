import {
    LegacyCard,
    ResourceList,
    Badge,
    ResourceItem,
    Text,
  } from '@shopify/polaris';
  import type {ResourceListProps} from '@shopify/polaris';
  import {useState} from 'react';
  
  function ResourceListWithSelection() {
    const [selectedItems, setSelectedItems] = useState<
      ResourceListProps['selectedItems']
    >([]);

  
    const resourceName = {
      singular: 'customer',
      plural: 'customers',
    };
  
    const items = [
      {
        id: '1',
        url: 'id1',
        name: 'Notification 1',
        date: 'January, 14',
      },
      {
        id: '2',
        url: 'id2',
        name: 'Notification 2',
        date: 'February, 22',
      },
      {
        id: '3',
        url: 'id3',
        name: 'Notification 3',
        date: 'March, 12',
      },
      {
        id: '4',
        url: 'id4',
        name: 'Notification 4',
        date: 'March, 24',
      },
      {
        id: '5',
        url: 'id5',
        name: 'Notification 5',
        date: 'April, 1',
      },
      {
        id: '6',
        url: 'id6',
        name: 'Notification 6',
        date: 'April, 2',
      },
    ];

        const action = (selectedItems:any) => {

                return selectedItems.map((e:any) => items[+e-1] )
        }


      const arr =   [
        {
          content: 'Set as active',
          onAction: () => console.log(action(selectedItems))
        },
        {
          content: 'Set as inactive',
          onAction: () => console.log('Todo: implement bulk remove tags'),
        },
        {
          content: 'Delete notifications',
          onAction: () => console.log('Todo: implement bulk delete'),
        },
      ];

      

  
    const promotedBulkActions = [
      {
        content: 'Actions',
        onAction: () => console.log('Todo: implement bulk edit'),
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
          <div style={{flexGrow:'1', display:'flex', justifyContent:'flex-end',alignItems:'center',paddingRight:'20px'}}>
            <Badge  status="success">Active</Badge>
          </div>
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